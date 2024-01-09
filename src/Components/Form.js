function Form() {
  function changeState(e) {
    e.target.value = "Hello, world!";
  }
  return (
    <form className="main-form">
      <div className="input-container">
        <label>
          Top text
          <br></br>
          <input type="text" name="top-text" />
        </label>
        <label>
          Bottom text
          <br></br>
          <input type="text" name="bottom-text" />
        </label>
      </div>

      <input
        type="submit"
        value="Get a new meme image"
        id="submit"
        onMouseEnter={changeState}
      />
    </form>
  );
}

export default Form;
