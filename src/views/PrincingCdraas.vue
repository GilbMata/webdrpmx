<template>
  <div class="pricing">
    <div class="baas">
      <div class="baas_icon">
        <b-img :src="require('@/assets/img/icons/baas.svg')"></b-img>
        <span>DraaS</span>
      </div>
      <div class="baas_info">
        <h3>Disaster Recovery as a Service</h3>
        <ul>
          <li>Real-time server replication to minimize data loss.</li>
          <li>Application and system consistency during recovery. </li>
          <li>Network traffic redirection to maintain operational continuity. </li>
          <li>Automated recovery testing and failover planning. </li>
          <li>Protection against catastrophic events and fault tolerance. </li>
        </ul>
      </div>
    </div>

    <div class="pslider">

      <div class="titulo-text">
        <h1 class="ptitulo">Pricing scheme</h1>
        <p class="pstitulo">Approache for covering differet markets segments</p>
      </div>
      <div class="psliders">
        <!-- <div class="first"> -->
        <!-- <fieldset class="range__field">
          <div style="display: flex; ">
            <label>Select total of CPU:</label>
            <span style="margin-left: 1rem;font-weight: 500;">{{ cpu }} cores</span>
          </div>
          <input class="range" type="range" min="1" max="10" value="1" v-model="cpu" label="jjj">
          <svg role="presentation" width="100%" height="10" xmlns="http://www.w3.org/2000/svg">
            <rect class="range__tick" x="1%" y="3" width="1" height="10"></rect>
            <rect class="range__tick" x="23%" y="3" width="1" height="10"></rect>

            <rect class="range__tick" x="55.5%" y="3" width="1" height="10"></rect>
            <rect class="range__tick" x="99%" y="3" width="1" height="10"></rect>
          </svg>
          <svg role="presentation" width="100%" height="14" xmlns="http://www.w3.org/2000/svg">
            <text class="range__point" x="1%" y="14" text-anchor="start">1</text>
            <text class="range__point" x="23%" y="14" text-anchor="middle">3</text>
            <text class="range__point" x="55.5%" y="14" text-anchor="middle">6</text>
            <text class="range__point" x="99%" y="14" text-anchor="end">10</text>
          </svg>
        </fieldset> -->

        <!-- <fieldset class="range__field">
          <div style="display: flex; ">
            <label>Select total RAM:</label>
            <span style="margin-left: 1rem;font-weight: 500;">{{ ram }} GB</span>
          </div>
          <input class="range" type="range" min="0" max="128" value="8" step="8" v-model="ram" label="jjj">
          <svg role="presentation" width="100%" height="10" xmlns="http://www.w3.org/2000/svg">
            <rect class="range__tick" x="1%" y="3" width="1" height="10"></rect>
            <rect class="range__tick" x="8%" y="3" width="1" height="10"></rect>
            <rect class="range__tick" x="15.5%" y="3" width="1" height="10"></rect>
            <rect class="range__tick" x="24%" y="3" width="1" height="10"></rect>
            <rect class="range__tick" x="99%" y="3" width="1" height="10"></rect>
          </svg>
          <svg role="presentation" width="100%" height="14" xmlns="http://www.w3.org/2000/svg">
            <text class="range__point" x="1%" y="14" text-anchor="start">1</text>
            <text class="range__point" x="8%" y="14" text-anchor="middle">16</text>
            <text class="range__point" x="15.5%" y="14" text-anchor="middle">32</text>
            <text class="range__point" x="24%" y="14" text-anchor="middle">64</text>
            <text class="range__point" x="99%" y="14" text-anchor="end">128</text>
          </svg>
        </fieldset> -->
        <!-- </div> -->

        <fieldset class="range__field">
          <div style="display: flex; ">
            <label>Select total terabytes DRaaS NvME Storage: </label>
            <span style="margin-left: 1rem;font-weight: 500;">{{ terabytes }} TB</span>
          </div>
          <input class="range" type="range" min="1" max="30" value="1" v-model="terabytes" label="jjj">
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

        <div class="last">
          <!-- <fieldset class="range__field">
            <div style="display: flex; ">
              <label>Select total of machines:</label>
              <span style="margin-left: 1rem;font-weight: 500;">{{ machines }} GB</span>
            </div>
            <input class="range" type="range" min="1" max="15" step="1" v-model="machines" label="jjj">
            <svg role="presentation" width="100%" height="10" xmlns="http://www.w3.org/2000/svg">
              <rect class="range__tick" x="1%" y="3" width="1" height="10"></rect>
              <rect class="range__tick" x="8%" y="3" width="1" height="10"></rect>
              <rect class="range__tick" x="15.5%" y="3" width="1" height="10"></rect>
              <rect class="range__tick" x="22.5%" y="3" width="1" height="10"></rect>
              <rect class="range__tick" x="29.5%" y="3" width="1" height="10"></rect>
              <rect class="range__tick" x="63.5%" y="3" width="1" height="10"></rect>
              <rect class="range__tick" x="99%" y="3" width="1" height="10"></rect>
            </svg>
            <svg role="presentation" width="100%" height="14" xmlns="http://www.w3.org/2000/svg">
              <text class="range__point" x="1%" y="14" text-anchor="start">1</text>
              <text class="range__point" x="8%" y="14" text-anchor="middle">2</text>
              <text class="range__point" x="15.5%" y="14" text-anchor="middle">3</text>
              <text class="range__point" x="22.5%" y="14" text-anchor="middle">4</text>
              <text class="range__point" x="29.5%" y="14" text-anchor="middle">5</text>
              <text class="range__point" x="63.5%" y="14" text-anchor="middle">10</text>
              <text class="range__point" x="99%" y="14" text-anchor="end">15</text>
            </svg>
          </fieldset> -->
          <!-- <fieldset class="range__field">
            <div style="display: flex; ">
              <label>Select total IP:</label>
              <span style="margin-left: 1rem;font-weight: 500;">{{ ips }} GB</span>
            </div>
            <input class="range" type="range" min="1" max="5" value="1" step="1" v-model="ips" label="jjj">
            <svg role="presentation" width="100%" height="10" xmlns="http://www.w3.org/2000/svg">
              <rect class="range__tick" x="1%" y="3" width="1" height="10"></rect>
              <rect class="range__tick" x="50%" y="3" width="1" height="10"></rect>
              <rect class="range__tick" x="99%" y="3" width="1" height="10"></rect>
            </svg>
            <svg role="presentation" width="100%" height="14" xmlns="http://www.w3.org/2000/svg">
              <text class="range__point" x="1%" y="14" text-anchor="start">1</text>
              <text class="range__point" x="50%" y="14" text-anchor="middle">3</text>
              <text class="range__point" x="99%" y="14" text-anchor="end">5</text>
            </svg>
          </fieldset> -->
        </div>
      </div>

      <div class="info">

        <div class="year">
          <div class="titulo">Annual Payment </div>
          <div class="priceGigabyte">
            <span class="txt"> Service fee at</span>
            <span class="price">{{ priceFinal }} </span>
            <span class="per">{{ terabytes }} TB in DRaaS NvME Storage</span>
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
      cpuCost: 4.5,
      ramCost: 4.5,
      terabytesCost: 0.12,
      machinesCost: 10,
      ipsCost: 10,

      cpu: 1,
      ram: 1,
      terabytes: 1,
      machines: 1,
      ips: 1,
      months: 12,
      priceGigabyte: 30,
      priceFinal: 349.43,
      priceFinal2: 29.11,

    }
  },
  // mounted:{
  //   changed()
  // }
  watch: {
    cpu() {
      this.changed()
    },
    ram() {
      this.changed()
    },
    terabytes() {
      this.changed()
    },
    machines() {
      this.changed()
    },
    ips() {
      this.changed()
    }
  },
  methods: {
    changed() {
      const price = 
        (this.terabytes * this.terabytesCost) 
      // const price =
      //   (this.cpuCost * this.cpu) +
      //   (this.ram * this.ramCost) +
      //   (this.terabytes * this.terabytesCost) +
      //   (this.machines * this.machinesCost) +
      //   (this.ips * this.ipsCost)
      this.priceFinal2 = this.truncateDecimals(price, 2)
      this.priceFinal = this.truncateDecimals(price * 12, 2)
    },
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
  align-items: flex-start;
  margin-bottom: 5rem;

  .baas {

    position: -webkit-sticky;
    position: sticky;
    top: 110px;
    align-self: flex-start;
    text-align: justify;


    .baas_icon {
      display: flex;
      flex-direction: column;
      align-items: center;

      span {
        font-size: 3rem;
        text-align: justify;
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

.last {
  display: flex;
  flex-direction: row;
  // width: 50%;
  // flex: 0 1 70%;
  flex-basis: auto;
}


.psliders {
  width: 90%;
  display: flex;
  flex-direction: column;
  gap: 15px;
  // .first{
  //   display: flex;
  //   flex-direction: row;
  // }

  label {
    display: block;
  }

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
    background: var(--light-primary);
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
    // border-bottom: 1px solid;
    // background-color: aqua;
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