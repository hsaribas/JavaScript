//grabbing the button
document.querySelector('#push').onclick = function (){
    //if user leave the input field empty
    if(document.querySelector('#todoinput').value.length == 0){
        alert("Please enter your task!");
    }else{
        //getting the empty div
        document.querySelector('#tasks').innerHTML += `
        <div class='card'>
            <div class='card-body'>
                    <span id='taskname'>
                        ${document.querySelector('#todoinput').value}
                    </span>
                <button class='btn btn-danger btn-sm float-right delete'>X</button>
            </div>
        </div>
        `;

        //code of deleting the task
        var current_task = document.querySelectorAll('.delete');
        for(var i=0; i<current_task.length; i++){
            //delete the task by clicking the button
            current_task[i].onclick = function(){
                this.parentNode.remove();
            }
        }
    }
}