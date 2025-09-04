import './joinForm.scss'
const JoinComponent = () => {
  return (
    <div className="joincontainer">
      <h2 className="joincontainer__title">Deliciousness <br />to your inbox</h2>
      <div className='joincontainer__descContainer'>
      <p className="joincontainer__desciption">Enjoy weekly hand picked recipes and recommendations</p>
      <form className="joincontainer__joinForm">
        <input
          type="email"
          placeholder="Enter your email"
          className="joincontainer__input"
          required
        />
        <button type="submit" className="joincontainer__btn">
          Join
        </button>
      </form>
      </div>
    </div>
  );
};

export default JoinComponent;
