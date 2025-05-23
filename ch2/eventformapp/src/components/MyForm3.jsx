import { useState } from "react";


export default function MyForm3() {
  const [user, setUser] = useState({
    firstName:'',
    lastname: '',
    emime: '',
  })

  const handleSubmit = event => {
    alert(`안녕하세교 ${user.firstName} ${user.lastname} 이메일 주소는 ${user.emime}입니다`)
    event.preventDefault();
  }

  const handleChange = event => {
    setUser({ ...user, [event.target.name]: event.target.value})
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>First Name</label>
      <input type="text" name="firstName" value={user.firstName} onChange={handleChange}  /> <br /><br />

      <label>Last Name</label>
      <input type="text" name="lastname" value={user.lastname} onChange={handleChange} /> <br /><br />

      <label>Emime Name</label>
      <input type="text" name="emime" value={user.emime} onChange={handleChange} /> <br /><br />

      <input type="submit" value="제출" />
    </form>
  );
}