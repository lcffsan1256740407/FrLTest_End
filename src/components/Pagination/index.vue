<template>
    <el-pagination
        class="pag"
        v-model:currentPage="pagerInfo.currentPage"
        v-model:page-size="pagerInfo.pageSize"
        :page-sizes="[10, 20, 30]"
        :background="true"
        :small="false"
        layout="total, prev, pager, next, sizes,jumper"
        :total="total"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
    />
</template>
    
<script setup lang='ts'>
const props = defineProps(['total','pagerInfo'])
const emit = defineEmits(['queryDatas'])
// 页码变动
const handleSizeChange = (val: number) => {
    emit('queryDatas')
}
// 分页变动
const handleCurrentChange = (val: number) => {
    emit('queryDatas')
}

</script>
    
<style lang="less" scoped>
.pag {
    float: right;
    &:deep(.el-pager + button.btn-next[type="button"]) {
        margin-right: 25px;
    }
    margin-bottom: 15px;
}
</style>