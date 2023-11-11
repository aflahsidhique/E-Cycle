import React,{ useState }from 'react'
import NavBar from './navbar'
import axios from 'axios'


const Pickup = () => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [ewastedata,setEwastedata] = useState('');
    const [image, setImage] = useState('');

    function convertToBase64(e){
        console.log(e);
        var reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onload = () => {
            setImage(reader.result)
        };
        reader.onerror = error => {
            console.log("Error: ",error);
        };
    }


    const handleSend = async(e) => {
        e.preventDefault();

        if (!name || !phone || !address || !ewastedata) {
            alert('Please fill in all the required fields.');            return;
          }

        try {
            console.log('Sending:', { name, phone, address,ewastedata });
            await axios.post("https://ewasteapi.onrender.com/ewaste",{
                name,
                phone,
                address,
                ewastedata,
                eimage:image
            });
            alert('Submission successful!');

            // Reset state values
            setName('');
            setPhone('');
            setAddress('');
            setEwastedata('');
            setImage('');
        } catch (e) {
            console.log(e)
            alert('Error submitting the form. Please try again.');
        }
      // Implement your logic to send the form data
    };
    

  return (
    <>
    <NavBar />
    <div className="form-container">
      <div className="form">
        <span className="heading">Place your E-waste Pickup</span>
        <input
          placeholder="Name"
          type="text"
          className="input"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          placeholder="Contact number"
          id="phone"
          type="number"
          className="input"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <textarea
          placeholder="Address"
          rows="4"
          cols="20"
          id="message"
          name="message"
          className="textarea"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        ></textarea>
        <input
          placeholder="E-waste items to be donated"
          id="ewaste"
          type="text"
          className="input"
          value={ewastedata}
          onChange={(e) => setEwastedata(e.target.value)}
        />
        <input
          type='file'
          className='file'
          accept='image/*'
          onChange={convertToBase64}
          />
          {image==="" || image===null?"": <img className='imgfile'width={150} height={150} src={image} alt=''/>}
        <div className="button-container">
          <button className="send-button" onClick={handleSend}>
            Place
          </button>
        </div>
      </div>
    </div>
    </>
    
  )
}

export default Pickup

 