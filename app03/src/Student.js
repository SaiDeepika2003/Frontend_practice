import { Component } from "react";

class Student extends Component
{
    
    slist = 
    [
      {
        sid: 101,
        sname: "pavan",
        sfee: 10000,
        scourse: "java",
        email: "pavan@gmail.com",
        city: "Hyderabad",
        state: "Telangana"
      },
      {
        sid: 102,
        sname: "ram",
        sfee: 10000,
        scourse: "python",
        email: "ram@gmail.com",
        city: "Hyderabad",
        state: "Telangana"
      },
      {
        sid: 103,
        sname: "kiran",
        sfee: 10000,
        scourse: "java",
        email: "kiran@gmail.com",
        city: "Hyderabad",
        state: "Telangana"
      },
      {
        sid: 104,
        sname: "karthik",
        sfee: 10000,
        scourse: "python",
        email: "karthik@gmail.com",
        city: "Vizag",
        state: "Andhrapradesh"
      },
      {
        sid: 105,
        sname: "Suresh",
        sfee: 10000,
        scourse: "java",
        email: "suresh@gmail.com",
        city: "Hyderabad",
        state: "Telangana"
      },
      {
        sid: 106,
        sname: "ramesh",
        sfee: 10000,
        scourse: "python",
        email: "ramesh@gmail.com",
        city: "Hyderabad",
        state: "Telangana"
      },
      {
        sid: 107,
        sname: "veera",
        sfee: 10000,
        scourse: "java",
        email: "veera@gmail.com",
        city: "Hyderabad",
        state: "Telangana"
      },
      {
        sid: 108,
        sname: "Surya",
        sfee: 10000,
        scourse: "python",
        email: "surya@gmail.com",
        city: "Vizag",
        state: "Andhrapradesh"
      },
      {
        sid: 109,
        sname: "Abhay",
        sfee: 10000,
        scourse: "java",
        email: "abhay@gmail.com",
        city: "Hyderabad",
        state: "Telangana"
      },
      {
        sid: 110,
        sname: "Mahesh",
        sfee: 10000,
        scourse: "python",
        email: "mahesh@gmail.com",
        city: "Vizag",
        state: "Andhrapradesh"
      }
    ]

    display(item, index){
      return(
      <tr key={item.sid}>
        <td>{item.sid}</td>
        <td>{item.sname}</td>
        <td>{item.sfee}</td>
        <td>{item.scourse}</td>
        <td>{item.email}</td>
        <td>{item.city}</td>
        <td>{item.state}</td>
      </tr>
      )
    }
    render(){
      return(
        <div>
          <h1>The following are the details of the Students</h1>
          <table>
            <thead>
              <tr>
                <th>SID</th>
                <th>SNAME</th>
                <th>SFEE</th>
                <th>SCOURSE</th>
                <th>EMAIL</th>
                <th>CITY</th>
                <th>STATE</th>
              </tr>
            </thead>
            <tbody>
              {this.slist.map(this.display.bind(this))}
            </tbody>
          </table>
        </div>
      )
    }
}
export default Student;