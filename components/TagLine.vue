<template>
  <div class="tag-line">
    <div class="first-line fade-in" style='animation-delay: 0.3s'>
      <div class="left">В</div>
      <div class="right">дизайне</div>
    </div>
    <div class="second-line fade-in" style='animation-delay: 0.4s'>
      <div class="right">красота</div>
    </div>
    <div class="third-line fade-in" style='animation-delay: 0.5s'>
      <div class="left">становится</div>
      <div class="right">
        <button class="show-reel" :class="{ active: animateStatus }" @mousedown="lineStart" @click="lineStart">
          <span v-if="animateStatus">Tap & hold</span>
          <span v-else>Show reel</span>
        </button>
      </div>
    </div>
    <div class="fourth-line fade-in" style='animation-delay: 0.6s'>
      инструментом
    </div>
    <div class="fifth-line fade-in" style='animation-delay: 0.7s'>
      бренда
    </div>
    <div v-show="isShowReelContainer" ref="reelContainer" class="reel-container" @mousedown="lineStart" @mouseup="lineStop">
      <svg width="100%" height="100%" viewBox="0 0 1350 753" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M84.6142 457.051C123.214 434.902 148.95 399.538 182.244 370.584C213.18 343.681 244.276 315.188 277.997 291.816C327.262 257.668 380.201 233.996 436.458 213.704C492.306 193.56 550.713 180.419 609.188 170.611C670.852 160.269 734.878 156.216 796.657 168.358C850.589 178.959 895.65 203.42 937.751 238.302C980.232 273.498 1001.91 328.868 1002.71 383.634C1003.71 451.41 957.671 512.587 908.274 554.503C864.3 591.818 798.968 631.007 738.924 612.993C704.579 602.688 673.514 566.825 667.391 531.407C658.392 479.357 694.158 431.223 731.601 399.594C768.662 368.289 822.14 348.734 870.349 344.86C908.406 341.802 945.154 346.228 976.615 369.364C989.734 379.01 997.08 391.77 1003.84 406.354C1015.22 430.899 1024.35 456.953 1033.5 482.4C1048.21 523.274 1041.01 568.926 1041.01 611.397C1041.01 625.079 1046.69 629.777 1031.53 634.492C987.959 648.049 941.484 641.678 896.54 644.725C868.358 646.636 840.188 649.514 811.959 650.64C772.86 652.2 734.276 647.285 695.929 639.937C660.017 633.056 624.697 622.765 594.356 601.633C570.97 585.344 551.526 563.428 534.464 540.796C499.954 495.021 464.067 447.513 436.364 397.247C428.018 382.104 410.551 356.983 415.242 338.476C419.554 321.466 448.5 310.717 461.523 302.143C499.995 276.813 533.68 240.588 581.026 232.481C611.396 227.281 658.399 232.137 676.966 261.022C693.317 286.459 686.166 327.671 686.166 356.408C686.166 391.377 686.782 425.693 691.235 460.431C694.489 485.817 695.669 510.756 680.721 532.534C661.407 560.673 635.647 583.383 604.307 597.314C576.014 609.89 544.708 610.396 514.281 608.862C484.442 607.357 455.844 598.453 427.258 590.46C391.368 580.426 355.41 570.506 319.865 559.291C273.888 544.785 226.547 526.996 197.17 486.531C176.04 457.424 163.271 420.048 159.996 384.385C157.38 355.899 155.514 323.23 164.971 295.947C172.93 272.988 187.065 246.826 205.525 230.416C211.55 225.059 215.593 243.583 216.696 246.376C224.681 266.575 233.556 286.209 245.047 304.678C265.345 337.303 283.441 371.017 306.066 402.129C327.019 430.942 343.147 457.195 355.35 490.85C361.063 506.604 367.942 522.509 375.627 537.416C379.746 545.405 386.906 558.288 396.28 561.075C403.868 563.331 411.502 561.023 417.965 557.038C437.478 545.004 455.042 530.004 472.976 515.823C517.999 480.22 568.944 448.238 596.421 396.121C613.787 363.183 630.873 320.3 623.833 282.239C614.86 233.735 570.126 188.421 530.896 162.068C495.837 138.517 445.387 114.803 402.475 126.298C350.891 140.117 305.641 184.852 277.715 228.632C266.987 245.451 257.986 263.196 249.271 281.113C240.249 299.659 229.289 318.212 224.3 338.382C219.926 356.067 220.72 374.457 219.043 392.459C217.486 409.186 213.991 426.095 209.28 442.218C201.598 468.51 187.788 490.917 169.102 510.941C156.647 524.286 141.576 531.389 123.009 531.595C108.324 531.758 96.5215 517.29 89.2141 505.871C77.7094 487.893 66.4817 467.514 58.5169 447.663C44.5336 412.812 27.7532 375.924 21.5301 338.758C14.1649 294.77 18.6958 251.668 31.6686 209.198C37.576 189.858 46.1082 178.214 62.8351 167.326C108.846 137.375 154.709 121.832 209.656 118.318C243.942 116.125 278.193 115.781 312.074 122.355C335.191 126.841 348.52 142.002 362.015 160.848C390.311 200.363 406.407 250.472 418.059 297.261C429.753 344.224 434.711 391.637 452.229 436.96C459.856 456.693 467.779 476.393 477.388 495.262C485.552 511.294 494.282 527.519 511.746 534.506C532.207 542.691 553.791 541.889 575.206 538.543C610.546 533.02 645.695 522.136 678.844 508.875C712.783 495.298 744.947 478.086 776.474 459.68C809.525 440.384 843.409 421.746 874.667 399.594C900.09 381.578 921.895 360.063 943.759 338.007C964.88 316.7 985.039 295.031 998.958 268.157C1021.89 223.883 1036.46 170.773 1028.15 120.947C1024.09 96.5813 1018.96 67.5088 988.819 82.3606C945.941 103.491 903.572 125.472 862.651 150.239C840.927 163.387 818.647 177.517 801.445 196.43C788.809 210.321 777.699 225.902 767.274 241.494C743.549 276.978 717.526 314.923 700.81 354.342C689.109 381.938 680.961 421.972 688.607 451.794C698.445 490.165 733.935 514.302 768.588 528.028C819.132 548.047 873.758 550.082 924.984 567.365C954.171 577.212 982.047 590.268 1010.79 601.257C1036.02 610.906 1060.02 611.868 1086.07 616.654C1101.25 619.441 1128.23 626.99 1114.24 646.321C1106.59 656.882 1094.15 663.34 1082.41 668.196C1054.34 679.812 1023.55 684.549 994.264 692.137C919.636 711.472 845.96 731.526 768.307 733.915C711.063 735.677 652.29 736.97 596.234 723.682C553.809 713.625 514.638 696.658 488.277 660.592C431.142 582.421 437.198 483.778 504.611 414.053C590.506 325.213 738.401 293.22 847.256 360.914C895.235 390.752 930.473 438.233 984.501 458.272C1045.93 481.057 1113.57 462.573 1170.66 434.707C1196.51 422.088 1220.49 405.491 1241.53 385.887C1259.98 368.697 1277.21 347.708 1274.95 320.92C1272.22 288.518 1252.3 259.947 1230.64 236.987C1199.82 204.308 1156.74 180.404 1114.24 166.762C1021.18 136.898 918.619 150.14 825.289 171.832C742.819 190.999 662.162 224.801 594.544 276.325C552.513 308.351 516.711 349.248 496.538 398.468C477.915 443.907 461.69 489.046 439.838 533.097C427.935 557.091 417.832 579.523 396.749 597.314C364.007 624.943 317.095 628.312 276.87 618.813C220.36 605.469 164.408 584.679 118.221 549.058C99.151 534.349 78.5212 517.306 68.4676 494.793C59.1835 474.002 59.6157 449.335 62.4596 427.196C65.6772 402.149 73.6434 377.345 80.202 353.028C87.3041 326.696 93.1061 299.957 102.357 274.259C114.224 241.29 125.917 204.337 162.155 193.425C179.164 188.304 196.786 186.321 214.537 186.666C235.985 187.082 252.906 199.542 268.234 213.704C307.272 249.774 334.064 300.442 358.166 347.019C375.576 380.664 395.081 413.287 399.471 451.606C403.919 490.423 381.627 511.899 355.444 537.604C317.924 574.439 275.393 611.524 226.272 632.145C211.992 638.139 202.656 633.628 191.632 623.789C172.956 607.123 155.341 587.704 139.719 568.21C108.343 529.058 83.8501 485.511 86.6794 434.144C89.9443 374.868 132.019 319.778 169.29 276.794C211.719 227.86 258.844 184.265 308.506 142.822C333.219 122.199 358.147 101.537 383.794 82.0789C404.315 66.5102 426.489 53.2964 447.441 38.329C462.665 27.4541 489.964 10.9632 509.681 21.2421C524.259 28.8423 534.498 50.5855 541.223 64.4287C557.426 97.7844 568.187 133.26 577.646 169.015C611.354 296.431 623.068 433.147 596.609 563.046C593.969 576.01 588.782 588.049 585.907 600.882C584.833 605.679 586.113 618.512 582.716 622.287C581.86 623.237 581.543 619.976 581.307 618.719C580.351 613.617 579.207 608.565 578.022 603.51C572.244 578.876 563.333 554.804 552.863 531.783C542.966 510.02 529.68 489.752 525.358 465.876C521.955 447.08 520.821 428.416 516.346 409.734C509.006 379.093 511.293 346.977 501.983 316.977C495.246 295.265 473.253 283.249 451.103 281.676C414.08 279.047 376.986 299.672 347.089 319.605C333.827 328.448 320.332 337.378 307.849 347.301C290.892 360.781 277.27 377.574 262.32 393.116C236.914 419.527 208.469 444.035 191.444 477.236C178.688 502.112 179.357 528.997 211.909 532.722C248.306 536.886 285.839 529.76 321.367 522.582C376.928 511.357 430.181 492.192 485.273 479.208C589.089 454.741 694.684 455.208 800.506 448.696C878.865 443.873 957.924 442.266 1036.41 440.34C1088.41 439.064 1140.13 446.721 1192.15 446.912C1230.95 447.054 1283.26 451.261 1314.38 423.253C1345.51 395.235 1330.28 347.86 1307.99 319.136C1255.56 251.559 1174.82 229.914 1092.18 231.167C1044.79 231.885 996.773 236.288 949.767 242.245C895.394 249.135 839.402 257.218 788.865 279.423C752.953 295.202 717.032 315.499 686.917 340.823C669.77 355.242 655.873 374.338 638.29 387.953C617.576 403.991 589.92 414.665 566.287 425.319C507.948 451.618 450.175 478.663 392.618 506.622C368.626 518.276 343.727 527.566 317.143 531.314C296.211 534.264 286.334 528.661 269.173 517.513C233.819 494.545 206.5 463.675 183.371 428.511C146.858 372.997 133.034 311.847 145.821 246C157.317 186.797 218.39 144.611 275.932 138.034C308.204 134.345 330.054 159.08 354.975 176.526"
          stroke="#E72A63"
          stroke-linecap="round"
          :stroke-width="strokeWidth"
          :stroke-dasharray="strokeDasharray"
          :stroke-dashoffset="strokeDashoffset"
        />
      </svg>
      <iframe
        v-if="isShowReel"
        class="reel"
        src="https://www.youtube.com/embed/4NRXx6U8ABQ"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen>
      </iframe>

      <button-dots
        v-if="isShowReel"
        class='close-button'
        active
        white
        @click="hideReel"
      />
    </div>
  </div>
</template>

<script>
import { isMobile } from 'mobile-device-detect';
import { enableBodyScroll, disableBodyScroll } from 'body-scroll-lock'

const STROKE_DEFAULT_WIDTH = '40'
const STROKE_MAX_WIDTH = '10000'

export default {
  data () {
    return {
      animateStatus: false,
      animateStartTime: 0,
      animationDurationTime: 0,
      pathLength: 0,
      strokeWidth: STROKE_DEFAULT_WIDTH,
      strokeDasharray: '',
      strokeDashoffset: '',
      isShowReel: false,
      isShowReelContainer: false,
      strokeWidthTimeout: null,
      showReelTimeout: null,
      hideReelTimeout: null
    }
  },
  mounted () {
    this.initLine()
  },
  methods: {
    initLine () {
      const path = document.querySelector('.reel-container path');
      this.pathLength = path.getTotalLength();
      this.strokeDasharray = this.pathLength + ' ' + this.pathLength;
      this.strokeDashoffset = this.pathLength;
    },
    lineStart (event) {
      this.animateStatus = true
      clearTimeout(this.hideReelTimeout)
      this.animateStartTime = new Date()
      this.isShowReelContainer = true
      this.$nextTick(() => {
        disableBodyScroll(this.$refs.reelContainer)
        const path = document.querySelector('.reel-container path');
        this.strokeWidth = STROKE_DEFAULT_WIDTH;
        path.style.transition = path.style.WebkitTransition = 'all 2s ease-in-out';
        path.getBoundingClientRect();

        this.strokeDashoffset = '0';
        this.strokeWidthTimeout = setTimeout(() => {
          this.strokeWidth = STROKE_MAX_WIDTH;
        }, 2000 - this.animationDurationTime);

        this.showReelTimeout = setTimeout(() => {
          this.isShowReel = true
        }, 2500 - this.animationDurationTime);
      })
      event.preventDefault()
    },
    lineStop () {
      if (isMobile) {
        return
      }
      this.animateStatus = false
      clearTimeout(this.strokeWidthTimeout)
      clearTimeout(this.showReelTimeout)
      this.animationDurationTime = new Date() - this.animateStartTime;
      const path = document.querySelector('.reel-container path');
      const transitionTime = Math.round(this.animationDurationTime / 1000 / 0.5) * 0.5
      path.style.transition = path.style.WebkitTransition = 'all ' + transitionTime + 's ease-in-out';
      this.strokeWidth = STROKE_DEFAULT_WIDTH;
      this.strokeDashoffset = this.pathLength;
      this.hideReelTimeout = setTimeout(() => {
        this.isShowReelContainer = false
        this.animationDurationTime = 0
        enableBodyScroll(this.$refs.reelContainer)
      }, transitionTime * 1000);
    },
    hideReel () {
      clearTimeout(this.strokeWidthTimeout)
      clearTimeout(this.showReelTimeout)
      this.isShowReel = false
      this.isShowReelContainer = false
      this.strokeWidth = STROKE_DEFAULT_WIDTH;
      this.strokeDashoffset = this.pathLength;
      enableBodyScroll(this.$refs.reelContainer)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/variables';

.tag-line {
  font-size: 6vw;
  line-height: 8vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-transform: uppercase;
  min-height: 100vh;
  padding: 1em 0;
  @media #{$media-lg} {
    min-height: auto;
    padding: 1em 0;
  }
  @media #{$media-xs} {
    padding: 15vw 0 25px;
    min-height: auto;
    line-height: 10vw;
  }
}

.first-line {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 60%;
  .left {
    margin-left: 10%;
  }
}

.second-line {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
}

.third-line {
  display: flex;

  .left {
    width: 62%;
  }

  .right {
    display: flex;
    .show-reel {
      border: 8px solid $styleRose;
      border-radius: 50%;
      color: $darkGray;
      cursor: pointer;
      font-size: $font-14;
      font-style: italic;
      line-height: $font-20;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 72px;
      width: 72px;
      text-transform: initial;
      text-align: center;
      padding-right: 0.3vw;
      transition: all $textTimeTransition ease;
      &:hover {
        background-color: $styleRose;
        color: $white;
      }
      &.active {
        background-color: $styleRose;
        color: $white;
      }

      @media #{$media-sm-up} {
        border: 0.8vw solid $styleRose;
        font-size: 2vw;
        line-height: 2vw;
        height: 9vw;
        width: 9vw;
      }
      @media #{$media-lg-up} {
        border: 0.6vw solid $styleRose;
        font-size: 1.4vw;
        line-height: 1.4vw;
        height: 7vw;
        width: 7vw;
      }
    }
  }
}

.fourth-line {
  text-align: right;
  margin-right: 15%;
}

.fifth-line {
  text-align: right;
}

.reel-container {
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  z-index: 99;

  .reel {
    border-radius: 32px;
    position: absolute;
    top: 0;
    left: 0;
    margin: 90px 24px 24px;
    height: calc(100% - 110px);
    width: calc(100% - 48px);
    z-index: 50;
  }
}

.close-button {
  position: absolute;
  top: 1%;
  right: 2%;
  z-index: 51;
  cursor: pointer;
}

</style>
