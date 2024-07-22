import { ref, provide, onMounted } from "vue"
import {dsgrid, fetchDS} from "./data.mjs"
export default {
    components: {
        dsgrid,
    },
    setup() {
        const ds = ref([])
        const children = ref([])
        // const client = useClient()
        provide('ds', ds)
        provide('children', children)
        onMounted(async () => {
            ds.value = await fetchDS('ds_QueryFamilyView.json');
            children.value = await fetchDS('ds_QueryChildren.json');
        })
        return {  ds, children }
    }
}
