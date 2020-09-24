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

// Load contexts (can't use require.context inside other functions so I will proccess everything separatly)
const langsContext = require.context('../assets/langs', false);
const libsContext = require.context('../assets/libs', false);
const otherContext = require.context('../assets/other', false);
const hlangsContext = require.context('../assets/hlangs', false);

// Keys are the original filepath (ej: ./ex.svg)
const langsKeys = langsContext.keys();
const libsKeys = libsContext.keys();
const otherKeys = otherContext.keys();
const hlangsKeys = hlangsContext.keys();

// Import all files (return arrays of final filepaths)
const langsFiles = langsKeys.map(k => encodeRef(langsContext(k))) as string[];
const libsFiles = libsKeys.map(k => encodeRef(libsContext(k))) as string[];
const otherFiles = otherKeys.map(k => encodeRef(otherContext(k))) as string[];
const hlangsFiles = hlangsKeys.map(k => encodeRef(hlangsContext(k))) as string[];

// Get skill text
const langsText = langsKeys.map(skillTextFromKey);
const libsText = libsKeys.map(skillTextFromKey);
const otherText = otherKeys.map(skillTextFromKey);
const hlangsText = hlangsKeys.map(skillTextFromKey);

// Fill exports
export const langs = langsText.map((t, i) => new SkillData(langsFiles[i], t.name, t.desc));
export const libs = libsText.map((t, i) => new SkillData(libsFiles[i], t.name, t.desc));
export const other = otherText.map((t, i) => new SkillData(otherFiles[i], t.name, t.desc));
export const hlangs = hlangsText.map((t, i) => new SkillData(hlangsFiles[i], t.name, t.desc));