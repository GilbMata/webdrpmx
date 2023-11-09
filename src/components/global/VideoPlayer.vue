<template>
    <div class="video-container">
        <div class="preview icon-bg" :style="{backgroundImage: `url(${require('@/assets/img/misc/video_preview.png')})`}">
            <img @click="isModalOpen = true" 
                src="@/assets/img/icons/play.svg" 
                class="play-trigger pointer icon-xl"
            >
        </div>
        <div class="modal" :class="{opened: isModalOpen}">
            <span class="close" @click="isModalOpen = false">
                X
            </span>
            <video ref="heroVideo">
                <source :src="source" type="video/mp4" />
            </video>
        </div>
    </div>
</template>

<script>
import Plyr from 'plyr'
export default {
    props: {
        source: {
            type: String,
            required: true
        }
    },
    data(){
        return {
            isModalOpen: false
        }
    },
    mounted(){
        this.initVideo()
        window.addEventListener('keydown', this.handleEscapeKey, false)
    },
    destroyed(){
        window.removeEventListener('keydown', this.handleEscapeKey, false)
    },
    watch: {
        isModalOpen(isIt){
            if(!isIt)
                this.player.pause()
            else
                setTimeout(()=>{
                    this.player.play()
                }, 400)
        }
    },
    methods: {
        initVideo(){
            this.player = new Plyr( this.$refs.heroVideo )
        },
        handleEscapeKey(ev){
            if(ev.keyCode == 27)
                this.isModalOpen = false
        }
    }
}
</script>

<style scoped>
.video-container{   
    --plyr-color-main: var(--secondary);
    --plyr-badge-border-radius: 0;
}
.preview{
    width: 100%;
    height: 20em;
    background-color: var(--light-primary);
    display: flex;
    transition: all 0.1s;
}
.preview > *{
    margin: auto;
}
.modal{
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 99;
    display: flex;
    padding: 3em;
    backdrop-filter: blur(12px);
    background: rgba(0,0,0,0.4);
    transition: all 0.3s;
    visibility: hidden;
    opacity: 0;
    overflow: auto;
}
.modal.opened{
    visibility: visible;
    opacity: 1;
}
.modal > .close{
    position: absolute;
    top: 3em;
    right: 0;
    padding: 27px 16px;
    color: var(--light);
    cursor: pointer;
    font-size: var(--font-display-5);
    line-height: 0;
    background: var(--secondary);
}
.modal > *{
    margin: auto;
}
.play-trigger{
    transition: all 0.1s;
    filter: drop-shadow(1px 18px 10px rgba(0,0,0,0.22));
}
.play-trigger:hover{
    transform: scale(1.1);
}
@media (max-width: 719px){
    .modal{
        padding: 0;
    }
}
</style>