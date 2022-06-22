<template>
    <ion-item-group>
        <div class="card">
            <ion-card>
                <ion-card-content>
                    <ion-card-header>
                        <p class="icoLabel">KK</p>
                        <ion-card-title class="nameTitle">{{ element.name }}<br />
                            <span>{{ element.position }}</span>
                        </ion-card-title>
                    </ion-card-header>
                    <ion-item>
                        <ion-text>
                            <p>{{ element.text }}</p>
                        </ion-text>
                    </ion-item>
                    <ion-item>
                        <ion-img :src=element.img alt="image" />
                    </ion-item>
                    <ion-item class="feadFotter">
                        <ion-button v-on:click=openmodel(position)>
                            Edit
                        </ion-button>
                        <ion-button v-on:click="deleteItem(position)">
                            Delete
                        </ion-button>
                    </ion-item>
                </ion-card-content>
            </ion-card>

        </div>
    </ion-item-group>
</template>

<script lang="ts">
import { IonItemGroup, IonContent, IonInput, IonItem, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonText, IonImg } from '@ionic/vue';
import { defineComponent } from 'vue';
export default defineComponent({
    name: 'ListItem',
    components: {
        IonItemGroup,
        IonItem,
        IonCardHeader, IonCard, IonCardTitle, IonCardContent, IonText, IonImg
    },
    props: {
        element: {},
        position: [],
        openmodel: {},
        deleteItem: {}
    },
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.feadFotter {
    display: flex;
    justify-content: right;
}

.feadFotter button {
    margin: 10px 5px 5px 5px;
    background-color: #fff;
    border-color: #cccccc;
}

.nameTitle {
    font-size: 18px;
}

.nameTitle span {
    font-size: 12px;
}
</style>
