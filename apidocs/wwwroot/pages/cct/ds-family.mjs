import { ref, provide, onMounted } from "vue"
import {dsgrid, fetchDS} from "./data.mjs"
export default {
    components: {
        dsgrid,
    },
    setup() {
        const ds = ref([])
        // const client = useClient()
        provide('ds', ds)

        onMounted(async () => {
            ds.value = await fetchDS('ds_QueryFamilyView.json');
        })
        return {  ds }
    }
}
