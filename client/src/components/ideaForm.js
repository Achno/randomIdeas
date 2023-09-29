class IdeaForm {
  constructor() {
    this.formModal = document.querySelector('#form-modal');
    // this.form = document.querySelector('#idea-form');

    // this.addEventListeners(); // ! error because we are selecting the #idea-form , but its not in the html we make it in render(); and form=NULL
  }

  addEventListeners() {
    this.form.addEventListener('submit', this.handleSubmit.bind(this));
  }

  handleSubmit(e) {
    e.preventDefault();

    const idea = {
      // this element has name="text"
      text: this.form.elements.text.value,
      tag: this.form.elements.tag.value,
      username: this.form.elements.username.value,
    };

    console.log(idea);

    //clear fields
    this.form.elements.text.value = '';
    this.form.elements.tag.value = '';
    this.form.elements.username.value = '';

    //dispatch event to close the modal from modal.js
    document.dispatchEvent(new Event('closeModal'));
  }

  render() {
    this.formModal.innerHTML = `
        <form id="idea-form">
        <div class="form-control">
          <label for="idea-text">Enter a Username</label>
          <input type="text" name="username" id="username" />
        </div>
        <div class="form-control">
          <label for="idea-text">What's Your Idea?</label>
          <textarea name="text" id="idea-text"></textarea>
        </div>
        <div class="form-control">
          <label for="tag">Tag</label>
          <input type="text" name="tag" id="tag" />
        </div>
        <button class="btn" type="submit" id="submit">Submit</button>
      </form>
        `;

    this.form = document.querySelector('#idea-form');
    this.addEventListeners();
  }
}

export default IdeaForm;
