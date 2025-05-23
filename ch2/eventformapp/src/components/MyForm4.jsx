import { useState } from "react";


export default function MyForm4() {
  const[firstName, setFirstName] = useState('');
  const[lastName, setLastName] = useState('');
  const[email, setEmail] = useState('');

  const handleSubmit = event => {
    alert(`안녕하세요 ${firstName} ${lastName} 이메일 주소는 ${email}입니다`)
    event.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>First Name</label>
      <input type="text" name="firstName" value={firstName} onChange={event => 
    setFirstName(event.target.value)}  /> <br /><br />

      <label>Last Name</label>
      <input type="text" name="lastName" value={lastName} onChange={event =>
    setLastName(event.target.value)} /> <br /><br />

      <label>Email Name</label>
      <input type="text" name="email" value={email} onChange={event =>
    setEmail(event.target.value)} /> <br /><br />

      <input type="submit" value="제출" />
    </form>
  );
}