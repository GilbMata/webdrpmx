<template>
  <div class="pricing">
    <div class="baas">
      <div class="baas_icon">
        <b-img :src="require('@/assets/img/icons/baas.svg')"></b-img>
        <span>BaaS</span>
      </div>
      <div class="baas_info">
        <h3>Backup as a Service</h3>
        <ul>
          <li>Scheduled and Automated Backup Implementation. </li>
          <li>Data retention with advanced policy configuration. </li>
          <li>Data compression and encryption for secure transfer and storage. </li>
          <li>Granular recovery of files and databases. </li>
          <li>Integration with enterprise file systems and databases. </li>
        </ul>
      </div>
    </div>

    <div class="pslider">

      <div class="titulo-text">
        <h1 class="ptitulo">Pricing scheme</h1>
        <p class="pstitulo">Approache for covering differet markets segments</p>
      </div>
      <!-- <div>
        <custom-slider raising v-model="terabytes" min="2" max="50" step="1" />
        {{ slider }}
      </div> -->
      <div class="psliders">
        <fieldset class="range__field">
          <p>Select total terabytes to backup (1TB = 1000 GB)</p>
          <input class="range" type="range" min="1" max="30"  value="1" v-model="terabytes">
          <svg role="presentation" width="100%" height="10" xmlns="http://www.w3.org/2000/svg">
            <rect class="range__tick" x="1%" y="3" width="1" height="10"></rect>
            <rect class="range__tick" x="15%" y="3" width="1" height="10"></rect>
            <rect class="range__tick" x="32%" y="3" width="1" height="10"></rect>
            <rect class="range__tick" x="65%" y="3" width="1" height="10"></rect>
            <rect class="range__tick" x="99%" y="3" width="1" height="10"></rect>
          </svg>
          <svg role="presentation" width="100%" height="14" xmlns="http://www.w3.org/2000/svg">
            <text class="range__point" x="1%" y="14" text-anchor="start">1</text>
            <text class="range__point" x="15%" y="14" text-anchor="middle">5</text>
            <text class="range__point" x="32%" y="14" text-anchor="middle">10</text>
            <text class="range__point" x="65%" y="14" text-anchor="middle">20</text>
            <text class="range__point" x="99%" y="14" text-anchor="end">30</text>
          </svg>
        </fieldset>
        <fieldset class="range__field">
          <p>Select contract term length (months)</p>
          <input class="range" type="range" min="12" max="36" step="12"  value="12" v-model="months">
          <svg role="presentation" width="100%" height="10" xmlns="http://www.w3.org/2000/svg">
            <rect class="range__tick" x="1%" y="3" width="1" height="10"></rect>
            <rect class="range__tick" x="50%" y="3" width="1" height="10"></rect>
            <rect class="range__tick" x="99%" y="3" width="1" height="10"></rect>
          </svg>
          <svg role="presentation" width="100%" height="14" xmlns="http://www.w3.org/2000/svg">
            <text class="range__point" x="1%" y="14" text-anchor="start">12</text>
            <text class="range__point" x="50%" y="14" text-anchor="middle">24</text>
            <text class="range__point" x="99%" y="14" text-anchor="end">36</text>
          </svg>
        </fieldset>
      </div>

      <div class="info">

        <div class="year">
          <div class="titulo">Annual Payment </div>
          <div class="priceGigabyte">
            <span class="txt"> Service fee at</span>
            <span class="price">{{ priceFinal }} </span>
            <span class="per">for {{ terabytes }} TB occupied in storage</span>
            <button id="buttonrequest" class="d-block ml-auto w-100" type="submit" name="submit" value="Submit">
              Request a quote
            </button>
          </div>
        </div>

        <div class="month">
          <div class="titulo">Monthly Payment </div>
          <div class="priceGigabyte">
            <span class="txt"> Service fee at</span>
            <span class="price">{{ priceFinal2 }} </span>
            <span class="per">{{ terabytes }} @ ${{ priceGigabyte }} per TB</span>
            <button id="buttonsubmit" class="d-block ml-auto w-100" type="submit" name="submit" value="Submit">
              Request a quote
            </button>
          </div>
          <div></div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>

export default {

  components: {
    // VueRangeSlider,
    // RangeSlider,
    // CustomSlider,
  },
  data() {
    return {
      terabytes: 1,
      months: 12,
      priceGigabyte: 30,
      pricepyear: 10,
      // priceFinal2: 0,

    }
  },
  computed: {
    priceFinal() {
      return this.truncateDecimals(this.priceGigabyte * this.terabytes * this.months, 2)
    },
    priceFinal2() {
      return this.truncateDecimals(this.priceGigabyte * this.terabytes, 2)
    }
  },
  // mounted()´{
  //   this.terabytes = 1
  // }
  // watch: {
  //   terabytes: function () {
  //     this.priceFinal = this.truncateDecimals(this.priceGigabyte * this.terabytes, 3)
  //     // console.log("🚀 ~  this.priceFinal :", this.priceFinal)
  //   },
  //   months: function () {
  //     console.log(this.months)
  //   }
  // },
  methods: {
    truncateDecimals(number, digits) {
      var multiplier = Math.pow(10, digits),
        adjustedNum = number * multiplier,
        truncatedNum = Math[adjustedNum < 0 ? 'ceil' : 'floor'](adjustedNum);

      return truncatedNum / multiplier;
    }
  }
}
</script>


<style lang="scss" scoped>
.pricing {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 20px;
  justify-content: space-evenly;
  align-items: center;
  margin-bottom: 5rem;

  .baas {
    text-align: justify;
  position: -webkit-sticky;
  position: sticky;    
  top: 100px;
  align-self: flex-start;
  .baas_icon {
      display: flex;
      flex-direction: column;
      align-items: center;

      span {
        font-size: 3rem;
      }

      img {
        width: 150px
      }
    }

    .baas_info {
      max-width: 400px;

      li {
        font-size: 1rem;
      }

      h3 {
        text-align: center;
      }
    }
  }

  .pslider {
    display: flex;
    // width: 50%;
    flex-direction: column;
    align-items: center;
    flex: 1 0 50%;

    .ptitulo {
      width: 100%;
      text-align: center;
    }

    .titulo-text {
      background-image: url('~@/assets/img/pattern-circles.svg');
      background-repeat: no-repeat;
      background-position: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 150px;
      margin: 20px 0;

      h1 {
        margin-bottom: 7px;
      }

      p {
        font-size: 1rem;
      }
    }

    // align-items: center;
    .info {
      display: flex;
      flex-wrap: wrap;
      flex-direction: row;
      justify-content: center;
      // width: 300px;
      gap: 5rem;
      // align-items: center;
      margin-top: 2rem;

      .year {
        // padding: 0 10rem;
        width: 275px;
      }

      .titulo {
        background-color: var(--primary);
        // color: var(--secondary);
        color: white;
        font-weight: bold;
        text-align: center;
        border-radius: 10px 10px 0 0;
        // margin: 10px;
        padding: 10px 30px;
      }

      .priceGigabyte {

        // background-color: var(--light-primary);
        border: 2px solid var(--primary);
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 2px 30px 1rem;
        font-size: 0.9rem;

        .price {
          font-size: 3rem;
          margin: 0.9rem 0 0;
          font-weight: 500;

        }

        .per {
          margin-bottom: 2rem;
          margin-top: -1rem;
          // line-height: 0;
        }

        .price::before {
          content: "$";
          font-size: 1.5rem;
        }
      }
    }
  }
}


.psliders {
  width: 90%;

  input.range {
    appearance: none;
    bottom: -10px;
    position: relative;
    width: 100%;
    margin: 0px;
    padding: 0;
    border: 0;
    background: transparent;
  }

  input.range:focus {
    outline: 0;
  }

  input.range::-moz-focus-outer {
    border: 0;
  }

  input.range::-webkit-slider-thumb {
    box-shadow: 1px 1px 1px black, 0px 0px 1px black;
    border: 0;
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background: white;
    cursor: pointer;
    -webkit-appearance: none;
    margin-top: -7.5px;
  }

  input.range::-moz-range-thumb {
    box-shadow: 1px 1px 1px black, 0px 0px 1px black;
    border: 0;
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background: white;
    cursor: pointer;
  }

  input.range::-ms-thumb {
    box-shadow: 1px 1px 1px black, 0px 0px 1px black;
    border: 0;
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background: white;
    cursor: pointer;
    height: 5px;
  }

  input.range::-webkit-slider-runnable-track {
    width: 100%;
    height: 5px;
    cursor: pointer;
    box-shadow: 1px 1px 1px rgba(0, 0, 0, 0), 0px 0px 1px rgba(13, 13, 13, 0);
    background: var(--primary);
    border-radius: 20px;
    border: 0;
  }

  input.range::-moz-range-track {
    width: 100%;
    height: 5px;
    cursor: pointer;
    box-shadow: 1px 1px 1px rgba(0, 0, 0, 0), 0px 0px 1px rgba(13, 13, 13, 0);
    background: var(--primary);
    border-radius: 20px;
    border: 0;
  }

  input.range::-ms-track {
    width: 100%;
    height: 5px;
    cursor: pointer;
    background: transparent;
    border-color: transparent;
    color: transparent;
  }

  input.range::-ms-fill-lower,
  input.range::-ms-fill-upper {
    // background: rgb(243, 4, 4);
    border: 0;
    border-radius: 40px;
    box-shadow: 1px 1px 1px rgba(0, 0, 0, 0), 0px 0px 1px rgba(13, 13, 13, 0);
  }

  .range__tick {
    fill: var(--light-primary);
  }

  .range__tick:first-child {
    -webkit-transform: translateX(2px);
    -moz-transform: translateX(2px);
    -ms-transform: translateX(2px);
    -o-transform: translateX(2px);
    transform: translateX(2px);
  }

  .range__tick:last-child {
    -webkit-transform: translateX(-3px);
    -moz-transform: translateX(-3px);
    -ms-transform: translateX(-3px);
    -o-transform: translateX(-3px);
    transform: translateX(-3px);
  }

  .range__field {
    border: 0;
  }
}

@media screen and (width <=850px) {
  .baas {
    position: static !important;
  }

  .last {
    flex-direction: column;
  }
}
</style>