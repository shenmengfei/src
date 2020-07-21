<template>
    <div>
        
        <van-overlay :show="true">
                <div class="wrapper">
                   <van-loading color="#1989fa" size="100" /> 
                </div>
</van-overlay>

    </div>
</template>

<script>
export default {
    data() {
        return {
            
        };
    },
    created() {
       
    },
    mounted() {

    },
    methods: {

    }
};
</script>

<style scoped>
.van-loading__circular{
    font-size: 1rem;
}
.van-overlay{
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>
