<template>
    <div class="row">
        <div class="col">
            <h1>일반로그인</h1>
            <input type="text" class="form-control" v-model="login_id" />
            <input type="password" class="form-control" v-model="login_pw" />
            <button class="btn btn-primary" @click="login">로그인</button> 
        </div>
        <div class="col">
            <h1>소셜로그인</h1>
            <input type="text" class="form-control" v-model="login_id" />
            <input type="password" class="form-control" v-model="login_pw" />
            <button class="btn btn-primary" @click="login">로그인</button> 
        </div>
    </div>
</template>

<script>

import { LOGIN_URL } from './urls.js';

export default {
    data() {
        return {
            login_id : '',
            login_pw : '',
        }
    },
    methods: {
        async login() {
            try {
                const res = await this.$axios.post(LOGIN_URL, {
                    login_id: this.login_id,
                    login_pw: this.login_pw
                })

                if (res.data.token) {
                    localStorage.setItem('jwt', res.data.token)
                }
            } catch (err) {
                console.log(err)
            }
        }
    }
}
</script>