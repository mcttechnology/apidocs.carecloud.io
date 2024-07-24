import { ref, provide, onMounted } from "vue"
import {dsgrid, fetch_agency_DS, fetchDS} from "./data.mjs"
export default {
    components: {
        dsgrid,
    },
    setup() {
        const ds = ref([])
        const csi_claim = ref([])
        // const client = useClient()
        provide('ds', ds)
        provide('csi_claim', csi_claim)
        
        onMounted(async () => {
            //ds.value = await fetchDS('ds_ClaimQuery.json');
            ds.value = await fetch_agency_DS('ds_cc4.json', 'ClaimQuery');
            csi_claim.value = await fetch_agency_DS('ds_csi.json', 'ClaimQuery');
        })
        return {  ds, csi_claim }
    }
}
