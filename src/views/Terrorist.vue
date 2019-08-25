<template>
    <div class="terrorist">
        <div class="bg-overlay">
            <div class="content">
                <input type="text" v-model="ans" @keypress.a.enter="validate()">
                <div>{{ text }}</div>
                <div v-if="bomb">0 : 00 :{{ sec }} to diffuse it.</div>
                <button><router-link tag="li" :to="{ name:'home'}">Logout</router-link></button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Terrorist',
    data() {
        return {
            ans: null,
            max: 1000000,
            text: null,
            bomb: false,
            sec: 60
        }
    },
    methods: {
        validate() {
            if(this.ans <= this.max && this.ans >= 1){
                localStorage.number = this.ans
                console.log(localStorage.number)
                this.text = 'bomb is planted'
                this.bomb = true
                setInterval(() =>{
                    this.sec = this.sec - 1
                    if(this.sec == 0) {
                        this.bomb = false
                    }
                }, 1000)
            }else {
                this.text = 'to plant a bomb number should be in range from 1 to million'
            }
            
        }
    }

}
</script>

