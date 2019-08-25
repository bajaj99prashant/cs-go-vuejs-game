<template>
    <div class="soldier">
        <div class="bg-overlay">
            <div class="content">
                <button @click="diffuse">diffuse bomb</button>
                <div v-if="flag">{{ response }}</div>
                <button><router-link tag="li" :to="{ name:'home'}">Logout</router-link></button>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'Soldier',
    data () {
        return{
             counter: null,
             flag: false,
             response: null
        }
    },
    methods : {
        diffuse () {
            if(localStorage.number == 2) {
                this.counter = 1
            }
            else if(localStorage.number < 2 ){
                this.counter = 0
            }else{
               for (var count = 2; count < localStorage.number; count++) {
                    var notPrime = false;
                    for (var i = 2; i <= count; i++) {
                        if (count%i===0 && i!==count) {
                            notPrime = true;
                        }
                    }
                    if (notPrime === false) {
                                this.counter = this.counter + 1
                    }
                }
                console.log(this.counter)
               
                axios(
                    {
                        method: 'post',
                        url: 'http://35.225.41.137/frontendtask/check/',
                        data : {
                            "n" : localStorage.number,
                            "output" : this.counter,
                            "name" : 'Prashant'
                        }
                    }
                ).then((response) => {
                    if(response.data.error == 0){
                        console.log(response.data)
                        this.response = response.data.message
                        this.flag = true
                    }else {
                        console.log(response.data)
                        this.response = response.data.message
                        this.flag = true
                    }
                    
                })
            }
            
        }
    }
}
</script>

<style>

</style>