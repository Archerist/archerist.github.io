<template>

	<div class="common-layout">
	<el-container>
		<el-header>
			<el-menu mode="horizontal" :ellipsis="true" id="nav">
				<el-menu-item index="1">Profile</el-menu-item>
				<el-sub-menu index="2">
					<template #title>
						Tools
					</template>
					<el-menu-item>JWT</el-menu-item>
				</el-sub-menu>
			</el-menu>
		</el-header>
		<el-main>
			<div>
				<router-view />
			</div>
		</el-main>
	</el-container>
	</div>
</template>

<style>
</style>
