<template>

    <h3> JWT Debugger</h3>

    <el-row :gutter="10" justify="end">
        <el-col :span="12" >
            <el-input type="textarea" :rows="15"/>
        </el-col>
        <el-col :span="12">
            <label>Header</label>
            <el-input type="textarea"/>
            <label>Payload</label>
            <el-input type="textarea"/>
            <label>Secret</label>
            <el-input type="textarea"/>
        </el-col>
    </el-row>
</template>

<style scoped>

h3{
    text-align: center;
}

</style>