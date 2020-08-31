// @ts-check

class Step {
  /**
   * @param {string} text 
   * @param {number} position 
   */
  constructor(text, position) {
    this.text = text;
    this.position = position;
  }
}

class Recorder {
  /**
   * @param {HTMLTextAreaElement} input
   */
  constructor(input) {
    //input.addEventListener('keyup', this._updateHandler);
    //input.addEventListener('click', this._updateHandler);
    input.addEventListener('input', this._inputHandler);
    input.addEventListener('keydown', this._specialKeyHandler);

    /**
     * @type {Step[]}
     */
    this._steps = [];
    this._lastPosition = 0;
    this._currentPosition = this._lastPosition;
    this._textBuffer = '';
    this._input = input;
    console.log(this._textBuffer);
  }

  /**
   * @param {KeyboardEvent} e 
   */
  _specialKeyHandler = (e) => {
    switch (e.key) {
      case 'Enter':
        this._textBuffer += '\n';
        console.log(this._textBuffer);
        break;
      case 'Backspace':
        this._textBuffer = this._textBuffer.slice(0, -1);
        console.log(this._textBuffer);
        break;
    }

    
  }

  /**
   * @param {InputEvent} e 
   */
  _inputHandler = (e) => {
    if (e.data) {
      this._textBuffer += e.data;
      console.log(this._textBuffer);
    }
  }
}

const inputRecorder = new Recorder(/** @type {HTMLTextAreaElement} */ (document.getElementById('input')));