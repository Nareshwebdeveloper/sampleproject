

export function Simpledatabining(){
        var employeeId=1;
        var employeeName="Naresh";
        var employeeDisgination="Devloper";
        var salary=65000;
    return(
        <div className="conatiner-fluid p-2">
                <h3>Employee Id:</h3><p>{employeeId}</p>
                <h3>Employee Name</h3><p>{employeeName}</p>
                <h3>Disgination:</h3><p>{employeeDisgination}</p>
                <h3>Salary:</h3><p>{salary}</p>
        </div>
    )
    
}