Vue.createApp({
    data() {
        return {
            items: [
                { title: '第一張', subtitle: '第一子標題', bg: '/images/banner.jpeg' },
                { title: '第二張', subtitle: '第二子標題', bg: '/images/dog.jpeg' },
                { title: '第二張', subtitle: '第二子標題', bg: '/images/.jpeg' },
            ],
            currentIndex: 0,
            timer: '',
            loopSecoun: 5
        }
    },
    methods: {
        setIndex(index) {
            this.currentIndex = index;
            this.doop();
        },
        doLoop() {
            clearINterval(this.timer);
            this.timer = setInterval(() => {
                let max = this.items.length - 1;
                if (this.currentIndex >= max) {
                    this.currentIndex = 0;
                } else {
                    this.currentIndex++;
                }
            }, this.loopSecond * 1000);
        }
    },
    mounted() {
        this.doLoop();
    }
}).mount(`#app-slider`);