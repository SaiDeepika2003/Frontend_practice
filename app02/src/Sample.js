 const Sample = () =>
{

  const firstName = "Teks";
  const lastName = "Academy";

  /*function display(item, index)
  {
    return <li key={index}> {item}</li>
  }*/


  const Branch=
  {
    hno: "5/32",
    street: "Near KPHB Metro",
    area : "KPHB",
    city: "Hyderabad",
    state: "Telangana",
    pincode: "500034"
  }
  
   const html=
				[
					{
						module: "Introduction To HTML",
						topics:
								[
									"What is HTML?" ,
									"HTML and the World Wide Web", 
									"Role of HTML in Web Development",
									"HTML editors and Development Environment Setup",
                  "Basic HTML Documnet Structure(DOCTYPE, <html>, <head>, <body>)"							
								]
					},
					{
						module: "HTML Documnet Structure",
						topics:
								[
									"HTML Elements and Tags " ,
									"Block - level vs Inline Elements", 
									"HTML Attributes(Global and Element-specific Attributes)",
									"Void Elemnets(eg.<img>, <br>, <input>"							
								]
					},
					{
						module: "Text Formatting and Semantics",
						topics:
								[
									"Paragraphs, Headings, and Divisions" ,
									"Semantics HTML: <header>, <footer>, <articles>, <section>", 
									"Text - level Elements: <strong>, <em>, <span>, etc",
									"Lists: Ordered(<ol>) and Unordered(<ul>) Lists",
									"Quotes: Blockquote and Inline Quotes"
								]
					},
					{
						module: "Links and Navigation",
						topics:
								[
									"Creating HyperLinks with <a>" ,
									"Linking to External and Internal Resources",
									"Email Links and Telephone Links",
									"Image Links", 
									"Navigation Bars and Menus(with <nav>)", 
								]
					},	
          {
						module: "Images and Multimedia",
						topics:
								[
									"Inserting Imades with <img>" ,
									"Alt Attribute and Image Descriptions",
									"Responsive Images(<picture>,srcset)",
									"Embedding Audio (<audio>)", 
                  "Embedding Video (<video>)",
									"Using <iframe> for External Content (e.g, Youtube)", 
								]
					},	
          {
						module: "Tables",
						topics:
								[
									"Creating Tables: <table>, <tr>, <td>, <th>" ,
									"Table Headers, Footers, and Captions",
									"Colspan and Rowspan Attributes",
									"Table Accessibility Considerations" 
								]
					},	
          {
						module: "Forms aand Input Handling",
						topics:
								[
									"Forms Structure: <form>, action, method" ,
									"Commaon Input Types: Text, Password, Email, Number, Date, etc",
									"Checkboxes, Radio Buttons, and Select Dropdowns",
									"Textarea and Submit Buttons", 
									"Form Validation (Required Fields,. Pattern Matching"
								]
					},
          {
						module: "HTML5 Sematic Elements",
						topics:
								[
									"The Role of Semantic HTML is Modern Development",
									"New Structural Elements in HTML5 (<header>, <footer>, <main>, <aside>)",
									"Using <section> and <article> for Content Segmentation",
									"Benefits for SEO and Accessibility"
								]
					},
				]

  const studentList = ["pavan", "kalyan","krishna","karthik", "kiran", "karan"]

     const slist =
     [
      {
         sid: 101,
         sname: "pavan",
         sfee: 10000,
         scourse: "java"
      },
      {
         sid: 102,
         sname: "kalyan",
         sfee: 10000,
         scourse: "java"
      },
      {
         sid: 103,
         sname: "krishna",
         sfee: 10000,
         scourse: "java"
      },
      {
         sid: 104,
         sname: "karthik",
         sfee: 10000,
         scourse: "java"
      },
      {
         sid: 105,
         sname: "kiran",
         sfee: 10000,
         scourse: "java"
      },
      {
         sid: 106,
         sname: "karan",
         sfee: 10000,
         scourse: "java"
      }
      ]


  return(
    <div>
      <div>
       <h1>
        HTML
       </h1>
       {
        html.map((item,index)=> 
        <div>
         <h3>{item.module}</h3>
         <ul>
         {item.topics.map((item,index)=><li>{item}</li>)}
         </ul>
        </div>
          )
       }
      </div>
    
      <div>

        <h1>Complicated Example</h1>
        <table>
          <thead>
            <th>SID </th>
            <th>SNAME</th>
            <th>SFEE </th>
            <th>SCOURSE</th>
          </thead>
          <tbody>
            {
              slist.map((item,index) => <tr>
                      <td>{item.sid}</td>
                      <td>{item.sname}</td>
                      <td>{item.sfee}</td>
                      <td>{item.scourse}</td>
              </tr>)
            }
          </tbody>
        </table>
      </div>

      <h1>Welcome to {firstName} {lastName}</h1>
      <h1>Adding variables we get {10+20}</h1>
      <h1>Welcome to {firstName+lastName}</h1>
      <h1>Welcome to {firstName+" "+lastName}</h1>
      <h1>Welcome to {(firstName).toUpperCase()+" "+(lastName).toUpperCase()}</h1>
      <h1>Welcome to {(firstName+" "+lastName).toUpperCase()}</h1>
      <h1>Welcome to {(firstName).toUpperCase()+" "+(lastName).toLowerCase()}</h1>

      <hr></hr>
 
      
      <h1>Welcome to {(firstName+" "+lastName).toUpperCase()}</h1>

      <hr></hr>
      <h3>The following are the details of the branches.....</h3>

      <p>Name : {Branch.name}</p>
      <p>Hno : {Branch.hno}</p>
      <p>area: {Branch.area}</p>
      <p>city : {Branch.city}</p>
      <p>state : {Branch.state}</p>
      <p>pincode: {Branch.pincode}</p>

      <hr></hr>

      <h1>The following are the details of the branches.....</h1>
      <p>Students : {studentList.join(", ")}</p>

      <hr></hr>
      <h1>The following are the details of the branches.....</h1>
      <ol>
        <p>{studentList[0]}</p>
        <p>{studentList[1]}</p>
        <p>{studentList[2]}</p>
        <p>{studentList[3]}</p>
        <p>{studentList[4]}</p>
        <p>{studentList[5]}</p>
      </ol>
      
      <hr></hr>
      <h1>The following are the details of the branches.....</h1>
      <ol>
        {
          //studentList.map(display);
          studentList.map((item, index)=><li key ={index}>{item}</li>)
        }
      </ol>

    </div>
  )
}

export default Sample;