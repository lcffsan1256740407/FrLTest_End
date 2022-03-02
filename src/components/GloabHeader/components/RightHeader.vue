<script lang="ts" setup>

</script>

<template>
    <div id="right-header">
        <!-- 推荐码 -->
        <el-dropdown>
            <span class="el-dropdown-link">
                <img src="@/assets/icons/code.svg" class="icons" />
            </span>
            <template #dropdown>
                <el-dropdown-menu>
                    <el-dropdown-item>复制推广码链接</el-dropdown-item>
                </el-dropdown-menu>
            </template>
        </el-dropdown>
        <!-- APP -->
        <el-dropdown>
            <span class="el-dropdown-link">
                <img src="@/assets/icons/app.svg" class="icons" />
            </span>
            <template #dropdown>
                <el-dropdown-menu>
                    <el-dropdown-item>复制推广码链接</el-dropdown-item>
                </el-dropdown-menu>
            </template>
        </el-dropdown>
        <!-- 消息 -->
        <el-dropdown>
            <span class="el-dropdown-link">
                <img src="@/assets/icons/message.svg" class="icons" />
            </span>
            <template #dropdown>
                <el-dropdown-menu>
                    <el-dropdown-item>复制推广码链接</el-dropdown-item>
                </el-dropdown-menu>
            </template>
        </el-dropdown>
        <!-- 用户信息 -->
        <el-dropdown>
            <span class="el-dropdown-link">
                <!-- 用户头像 -->
                <img src="@/assets/headerImgs/author.jpg" class="authorImg" />
                <span>18688888888</span>
            </span>
            <template #dropdown>
                <el-dropdown-menu>
                    <el-dropdown-item>退出登陆</el-dropdown-item>
                </el-dropdown-menu>
            </template>
        </el-dropdown>
    </div>
</template>

<style scoped lang="less">
#right-header {
    display: flex;
    align-items: center;
    font-size: 16px;
    color: white;
    .icons{
        width: 25px;
        margin-right: 12px;
    }
    .authorImg {
        width: 35px;
        height: 35px;
        border-radius: 50%;
        margin-left: 10px;
        margin-right: 15px;
    }
    &:deep(.el-dropdown-link) {
        cursor: pointer;
        color: white;
        display: flex;
        align-items: center;
        margin-left: 8px;
    }
}
</style>
