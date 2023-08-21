const Interface = (props) => {
  
  return(
    <>
  <form>
    <label htmlFor="title">Title:</label>
    <input type="text" id="title" name="title" placeholder="Enter your title" required/><br></br>
    <label htmlFor="subtitle">Subtitle:</label>
    <input type="text" id="subtitle" name="subtitle" placeholder="Enter your subtitle" required/><br></br>
    <label htmlFor="buttontitle">Button title:</label>
    <input type="text" id="buttontitle" name="buttontitle" placeholder="Enter your button title" required/><br></br>
    <label htmlFor="buttonlink">Button link:</label>
    <input type="text" id="buttonlink" name="buttonlink" placeholder="Enter your button link" required/><br></br>
    <label htmlFor="price">Price:</label>
    <input type="text" id="price" name="price" placeholder="Enter your price" required/><br></br>
    <label htmlFor="deletedprice">Deleted price:</label>
    <input type="text" id="deletedprice" name="deletedprice" placeholder="Enter your deleted price" required/><br></br>
    <label for="checkbox">Deleted Price Present:</label>
  <input type="checkbox" id="checkbox" name="checkbox" /><br></br>
    <input className="submit" type="submit" value="Submit" onClick={props.submitForm} />
  </form>
      </>
  )
};

export default Interface;