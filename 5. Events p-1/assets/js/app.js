let addbtn = document.getElementById('todo');



addbtn.addEventListener('click', function () {
    let datetime = this.previousElementSibling;
    let task = datetime.previousElementSibling;
    datetime.style.borderColor = '#ced4da';
    task.style.borderColor = '#ced4da';
  

    if (task.value.trim().length > 0 && datetime.value.trim().length > 0) {
        let list = document.getElementById('list');
        let date = datetime.value.split('T')[0];
        let time = datetime.value.split('T')[1];
        list.innerHTML += `<li class="list-group-item my-2">
            <div class="row align-items-center">
                <p class="col-md-4 m-0">${task.value}</p>
                <p class="col-md-4 m-0">${date} | ${time}</p>
                <div class="col-md-4 row justify-content-between">
                    <button onclick="this.parentElement.parentElement.parentElement.classList.toggle('done')" class="btn btn-success btn-done col-md-5">Done</button>
                    <button onclick="this.parentElement.parentElement.parentElement.remove()" class="btn btn-danger col-md-5">Delete</button>
                </div>
            </div>
        </li>`;
        datetime.value = "";
        task.value = "";
        checkAllItem();

    }
    else {
        datetime.style.borderColor = 'red';
        task.style.borderColor = 'red';
    }
});

function checkAllItem() {
    let items = document.querySelectorAll(".list-group-item");
    for (const item of items) {
        let datetime = item.children[0].children[1].innerText.split('|');
        let result = colorTaskState(datetime[0], datetime[1]);
        item.style = 'background-color:' + result + '!important';
    }
}

  setInterval(checkAllItem,1000)




function colorTaskState(taskDate, taskTime){
    let dateObj = new Date();


    let year = dateObj.getFullYear();
    let month = dateObj.getMonth()+1;
    let day = dateObj.getDate();

    // let time = dateObj.toLocaleTimeString().split(':');
    let time = dateObj.getHours();
    let minutes = dateObj.getMinutes();
    

    taskDate = taskDate.trim().split('-');
    taskTime = taskTime.trim().split(':');

    
    

    // if(taskDate[0] == year ){
    //     console.log('bu ildedi');
    //     if(taskDate[1] >= month){
    //         if(taskDate[1] - month > 1){
    //             console.log("Mavi Yanmalidi")
    //         }
    //         console.log('ay boyukdu')
    //         if(taskDate[2] >day){
    //             console.log('gun boyukdu')
    //         }
    //     }
    // }
    if(taskDate[0] < year){
        // console.log('taskin muddeti bir nece ildir bitib');
        return '#FF1E00';
    }
    else if(taskDate[0] == year && taskDate[1] < month){
        // console.log('taskin muddeti bir neca aydir bitib');
        return '#E64848';
    }
    else if(taskDate[0] == year && taskDate[1] == month && taskDate[2] < day){
        // console.log("taskin muddeti bir nece gun once bitib");
        return '#F65A83';
    }
    else if(taskDate[0] == year && taskDate[1] == month && taskDate[2] == day && taskTime[0] < time){
        // console.log('taskin mudeeti bir nece saat once bitdi');
        return '#FF8B8B';
    }
    else if(taskDate[0] == year && taskDate[1] == month && taskDate[2] == day && taskTime[0] == time && taskTime[1] < minutes){
        // console.log('taskin muddeti bir nece deqiqe once bitdi');
    return '#FFC3C3';
    }


   
    
   
    
    if(taskDate[0] == year && taskDate[1] == month && taskDate[2] == day && taskTime[0]== time && taskTime[1] > minutes){
        // console.log('taskin bitmesine deqiqeler qalib');
        return '#F15412'
    }
    else if(taskDate[0] == year && taskDate[1] == month && taskDate[2] == day && taskTime[0] > time){
        // console.log('taskin bitmesine bir nece saat qalib');
        return '#FF8D29'
    }
    else if(taskDate[0] == year && taskDate[1] == month && taskDate[2] > day){
        // console.log("taskin bitmesine bir nece gun qalib");
        return '#FAC213'
    }
    else if(taskDate[0] == year && taskDate[1] > month){
        // console.log('taskin bitmesine bir nece ay qalib');
         return '#FEF9A7'
    }
    else if(taskDate[0] > year){
        // console.log('taskin bitmesine bir nece il qalib');
        return '#fff'
    }
  
}


