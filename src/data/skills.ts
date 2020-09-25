import strings from './strings.yaml';

/**
 * Represents the final data.
 */
class SkillData {
  constructor(public image: string, public name: string, public desc: string | undefined) {}
}

/**
 * Represents the text information of the file.
 */
class SkillText {
  constructor(public name: string, public desc: string | undefined) {}
}

/**
 * Extract the text info from the filename.
 * ej: name__desc.svg
 * 
 * @param key - Item from keys()
 * @return - SkillText object.
 */
function skillTextFromKey(key: string) {
  // Doesn't work without extension or g flag
  const fileMatch = key.match(/([^/]*)\.[^.]*$/);

  if (!fileMatch) {
    throw new Error('Critical invalid file name, no match (skills data).');
  }

  const fileWithoutExt = fileMatch[1];
  const splitedSkillText = fileWithoutExt.split('__');

  return new SkillText(splitedSkillText[0], splitedSkillText[1]);
}

/**
 * Escapes an Url (/ are not escaped but : are)
 * 
 * @param url - Relative url without specifying protocol or host.
 */
function encodeRef(url: string) {
  return encodeURIComponent(url.replace(/\//g, '_slash_')).replace(/_slash_/g, '/');
}

function skillDataFromContext(ctx: __WebpackModuleApi.RequireContext) {
  const keys = ctx.keys();
  const files = keys.map(k => encodeRef(ctx(k))) as string[];
  const text = keys.map(skillTextFromKey);

  return text.map((t, i) => new SkillData(files[i], t.name, t.desc));
}

export const langs = skillDataFromContext(require.context('../assets/langs', false));
export const libs = skillDataFromContext(require.context('../assets/libs', false));
export const other = skillDataFromContext(require.context('../assets/other', false));

interface TextSrc {
 [k: string]: SkillText;
}

interface SkillsToTextSrc {
  [k: string]: TextSrc;
}

interface LangToSkills {
  [k: string]: SkillsToTextSrc
}

const customTexts: LangToSkills = {};
// customText['en']['hlangs'][id]: SkillText+id

Object.entries(strings).forEach(([langKey, lang]: [string, any]) => {
  customTexts[langKey] = {};

  Object.entries(lang.skills).forEach(([skillKey, skill]: [string, any]) => {
    customTexts[langKey][skillKey] = {};

    if (skill.items) {
      skill.items.forEach((i: SkillText & {id: string}) => {
        customTexts[langKey][skillKey][i.id] = i;
      });
    }
  });
})

function skillDataFromContextAndTextSrc(ctx: __WebpackModuleApi.RequireContext, textsrc: TextSrc) {
  const keys = ctx.keys();
  const files = keys.map(k => encodeRef(ctx(k))) as string[];

  const ids = keys.map(k => skillTextFromKey(k).name);

  return ids.map((id, i) => new SkillData(files[i], textsrc[id].name, textsrc[id].desc));
}

interface LangsToSkillDataArray {
  [k: string]: SkillData[];
}

function langsToDataSrcFromContextAndSkill(ctx: __WebpackModuleApi.RequireContext, skill: string) {
  const res: LangsToSkillDataArray = {};

  Object.keys(customTexts).forEach(lang => {
    res[lang] = skillDataFromContextAndTextSrc(ctx, customTexts[lang][skill]);
  });

  return res;
}

export const hlangs: LangsToSkillDataArray = langsToDataSrcFromContextAndSkill(require.context('../assets/hlangs', false), 'hlangs');