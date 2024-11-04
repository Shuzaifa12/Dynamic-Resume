// this is the whole form which is stored into a form variable:
const form = document.querySelector("#Form")

// This is the button tag which when click, will generate the form elements:
const mainbutton = document.querySelector("#main_btn")

// This is the variable in which all the form output elements are stored:
const output = document.querySelector("#resumeoutput")

// In this date variable end date value is stored:
const date = document.querySelector('#End_Date')

// This is a check button variable:
const check_Button = document.querySelector('#Checkbox') 

// This is the event for check button; if it is checked the end date wil disable and vice versa:
check_Button.addEventListener ('change', ()=>{
    if(check_Button.checked){
        date.disabled = true;
    }
    else(
        date.disabled = false 
    )
})

// this is the initial condition for the style of output and the form to make hidden and visible:
output.style.display = "none"
form.style.display = "block"
    
// this is the event listen; means when the user clicked the button stored data will be displayed
mainbutton.addEventListener('click', ()=>{
     // this event.preventDefault() is used to make the data visible
    event.preventDefault(); 

    output.style.display = "block";
    form.style.display = "none";

    // Section 01 logic writing:
    // in this first name variable the value of first name is stored       
    const first_name = form.firstname.value;   
    // in this last name variable the value of last name is stored      
    const last_name = form.lastname.value;    
    // in this number variable number value is stored      
    const Num = form.number.value;         
    // in this email variable email value is stored     
    const Email = form.email.value;   
    // in this address varaible address value is stored              
    const Address = form.address.value; 

    sec01heading.textContent = "Personal Information"
    // these variable is used in the container where the data should be displayed 
    // this textcontent is used to display the form text; applies on all the following     
    FN.textContent = `First Name: ${first_name}`;  
    LN.textContent = `Last Name: ${last_name}`;
    cell.textContent = `Phone No: ${Num}`;
    em.textContent = `Email: ${Email}`;
    adr.textContent = `Address: ${Address}`;


    // Section 02 logic Writing:
    const job_title = form.jobtitle.value; 
    const organization = form.company.value;
    const start_date = form.startdate.value;
    const end_date = form.enddate.value;
   
    sec02heading.textContent = "Work Experience"
    JT.textContent = `Job Title: ${job_title}`;
    COMP.textContent = `Organization: ${organization}`;
    SD.textContent = `Start Date: ${start_date}`;

    // Here it is the condition; if the date is disable it will print the checkbox label; otherwise print the date
    if(!date.disabled){
        ED.textContent = `End Date: ${end_date}`;
    }
    else{
        ED.textContent = `I am currently working`
    }

     // Section 03 L0gic Writing:
     const Skills = form.myskills.value;

     sec03heading.textContent = "Skills";
     display_Skills.textContent = `${Skills}`;

     // Section 04 logic Writing:
     const deg = form.dgr.value;
     const institute = form.inst.value;
     const Passing_Year = form.passingyear.value

     sec04heading.textContent = "Education";
     Degree.textContent = `Degree: ${deg}`;
     Inst.textContent = `Institute: ${institute}`;
     py.textContent = `Passing Year: ${Passing_Year}`


})

// this is the back to form button on which it is click it will return back to the form:
const Back_to_form = document.querySelector("#BTF").addEventListener("click", ()=>{
    output.style.display = "none";
    form.style.display = "block";
})