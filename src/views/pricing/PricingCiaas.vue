<template>
  <div class="pricing">
    <div class="baas">
      <div class="baas_icon">
        <b-img :src="require('@/assets/img/icons/baas.svg')"></b-img>
        <span>IaaS</span>
      </div>
      <div class="baas_info">
        <h3>Infrastructure as a Service</h3>
        <ul>
          <li>Access to virtual machines and on-demand storage resources. </li>
          <li>Hypervisor management to deploy and configure virtual systems. </li>
          <li>Software-Defined Networks (SDN) for traffic control and isolation. </li>
          <li>Capability to allocate CPU, RAM, and storage resources as needed. </li>
          <li>Integration with automation and orchestration tools for provisioning and management. </li>
        </ul>
      </div>
    </div>

    <div class="pslider">

      <div class="titulo-text">
        <h1 class="ptitulo">Pricing scheme</h1>
        <p class="pstitulo">Approache for covering differet markets segments</p>
      </div>

      <div class="options">
        <h4><strong>Windows VM Calculator</strong></h4>
        <div class="text-input">
          <!-- <label for="input1">CPU</label> -->
          <span for="input1">CPU</span>
          <input type="text" id="input1" placeholder=" " v-model="cpu">
        </div>
        <div class="text-input">
          <!-- <label for="input1">RAM</label> -->
          <span for="input1">RAM</span>
          <input type="text" id="input2" placeholder="" v-model="ram">
        </div>
        <div class="text-input">
          <!-- <label for="input1">Storage (GB)</label> -->
          <span for="input1">Storage (GB)</span>
          <input type="text" id="input3" placeholder="" v-model="storage">
        </div>
      </div>


      <div class="info">
        <!-- <div class="year">
          <div class="titulo">Annual Payment </div>
          <div class="priceGigabyte">
            <span class="txt"> Service fee at</span>
            <span class="price">{{ priceFinal }} </span>
            <span class="per">{{ terabytes }} TB in DRaaS NvME Storage</span>
            <button id="buttonrequest" class="d-block ml-auto w-100" type="submit" name="submit" value="Submit">
              Request a quote
            </button>
          </div>
        </div> -->

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
      cpuCost: 16.60,
      ramCost: 13,
      storageCost: 0.12,

      cpu: 1,
      ram: 1,
      storage: 1,

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
      if (this.cpu > 0){
       this.changed()
      }
    },
    ram() {
      if (this.ram > 0) {
        this.changed()
      }
    },
    storage() {
      if (this.storage > 0) {
        this.changed()
      }
    },
  },
  methods: {
    changed() {
      const price =
        (this.cpuCost * this.cpu) +
        (this.ram * this.ramCost) +
        (this.storage * this.storageCost) 
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
  flex-wrap: nowrap;
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
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    // align-items: center;
    // flex: 1 0 50%;

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
      width: 100%;
      height: 150px;
      margin: 20px 0;

      h1 {
        margin-bottom: 7px;
      }

      p {
        font-size: 1rem;
      }
    }

    .options {
      //   margin-top: auto;
      //   margin-bottom: auto;
        // width: 50%;
      display: flex;
      flex-direction: column;
      gap: 10px;
      justify-content: center;
      align-items: flex-end;

      .text-input {
        display: flex;
        flex-direction: row;

        input[type="text"] {
          //       display: inline-block;
          width: 100px;
          border: 1px solid var(--primary);
          border-radius: 3px;
                text-align: center; 
        }

            #input3{
              // width: 10px;
            }

            // label {
            //   background-color: red;
            // }
        span {
          // position: absolute;
          // top: 0;
          // left: 0;
          // bottom: 0;
          // height: 20px;
          line-height: 40px;
          color: white;
          border-radius: 3px 0 0 3px;
          padding: 0 20px;
          background: var(--primary);
          // transform: translateZ(0) translateX(0);
          transition: all 0.3s ease-in;
          transition-delay: 0.2s;

        }

        span+input[type="text"] {
          // border: solid var(--primary);
        }

        input[type="text"]+label {
          position: absolute;
          top: 0;
          left: 0;
          bottom: 0;
          height: 40px;
          line-height: 40px;
          color: white;
          border-radius: 3px 0 0 3px;
          padding: 0 20px;
          background: var(--primary);
          transform: translateZ(0) translateX(0);
          transition: all 0.3s ease-in;
          transition-delay: 0.2s;
        }

        //     input[type="text"]:focus+label {
        //       // transform: translateY(-120%) translateX(0%);
        //       border-radius: 3px;
        //       transition: all 0.1s ease-out;
        //     }

        //     input[type="text"]:focus {
        //       // padding: 10px;
        //       transition: all 0.3s ease-out;
        //       transition-delay: 0.2s;
        //     }
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

@media screen and (width <=850px) {
  .pricing {
    flex-wrap: wrap;
  }

  .baas {
    position: static !important;
  }

  .last {
    flex-direction: column;
  }
}</style>