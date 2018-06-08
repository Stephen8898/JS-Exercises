
function setDifference(arr1,arr2){
    
var arrD = [];


    for(var i = 0; i <= arr1.length; i++){
        for(var j = 0; j < arr2.length; j++){
            if(arr1[i] == arr2[j]){
                arrD.push(arr1[i]);
            }
        }
    }

    var arr = [];
    var j =0;
    for( var i =0; i < arr1.length; i++){
        if(arr1[i] != arrD[j] ){
            arr.push(arr1[i]);
        }else{
            j++;
        }
    }
    var j = 0;
    for(var i = 0; i < arr2.length; i++){
        if(arr2[i] != arrD[j]){
            arr.push(arr2[i]);
        }else {
            j++;
        }
        return arr;
    }

}   

module.exports = setDifference;

