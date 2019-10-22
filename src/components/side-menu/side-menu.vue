<template>
	<div class="side-menu-wrapper">
		<slot name="logo"></slot>
		<Menu>
			<template v-for="item in list">
				<re-submenu
					v-if="item.children"
					:key="`menu_${item.name}`"
					:name="item.name"
					:parent="item"
				>
				</re-submenu>
				<menu-item
					v-else
					:key="`menu_${item.name}`"
					:name="item.name"
				>
					<Icon :type="item.icon"/>
					{{ item.meta.title }}
				</menu-item>
			</template>
		</Menu>
	</div>
</template>

<script>
	import ReSubmenu from './re-submenu'
  export default {
    name: 'SideMenu',
		components: {
    	ReSubmenu,
		},
		props: {
    	collapsed: {
    		type: Boolean,
				default: false
			},
			list: {
    		type: Array,
				default: () => []
			}
		}
  }
</script>

<style scoped>

</style>
