import { ref, provide, onMounted } from "vue"
import {dsgrid, fetch_agency_DS, fetchDS} from "./data.mjs"
export default {
    components: {
        dsgrid,
    },
    setup() {
        const ds = ref([])
        const csi_provider = ref([])
        
        // const client = useClient()
        provide('ds', ds)
        provide('csi_provider', csi_provider)
        
        onMounted(async () => {
            ds.value = await fetchDS('ds_QueryProvider.json');
            csi_provider.value = await fetch_agency_DS('ds_csi.json', 'QueryProvider');
        })
        return {  ds }
    }
}
