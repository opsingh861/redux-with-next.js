import AddUser from "./components/AddUser";
import DisplayUser from "./components/DisplayUser";


export default function Home() {
  return (
    <div style={{display:'flex',flexDirection:'column'}}>
      <AddUser />
      <DisplayUser />
    </div>
  )
}
