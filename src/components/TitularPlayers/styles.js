import styled from 'styled-components'

export const TitularsSection = styled.section`
  .titular {
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: 0.5s;

    img {
      margin-bottom: 0;
    }

    div {
      position: relative;
    }

    p {
      color: #fff;
      background-color: rgba(#000, 0.5);
      padding: 0 1rem;
      line-height: 2;
      border-radius: 1rem;
      font-size: 0.9rem;
    }

    button {
      $color: #e40320;
      justify-content: center;
      align-items: center;
      position: absolute;
      right: 0;
      top: 0;
      color: #fff;
      width: 1.15rem;
      height: 1.15rem;
      border-radius: 50%;
      background-color: $color;
      display: none;

      &:hover {
        background-color: darken($color, 5);
      }
    }

    &:hover {
      button {
        display: flex;
      }
    }
  }
  .field {
    margin: 0 auto;
    width: 75%;
    position: relative;
    .titular {
      position: absolute;

      img {
        --size: 3rem;
      }

      p {
        @media screen and (max-width: 640px) {
          display: none;
        }
      }
    }
  }
  .titular:first-child {
    left: 5%;
    top: 50%;
    transform: translateY(-25%);
  }

  .titular:nth-child(2) {
    left: 30%;
    top: 10%;
  }

  .titular:nth-child(3) {
    left: 25%;
    top: 30%;
  }

  .titular:nth-child(4) {
    left: 25%;
    top: 50%;
  }

  .titular:nth-child(5) {
    left: 30%;
    top: 75%;
  }

  .titular:nth-child(6) {
    left: 50%;
    top: 30%;
    transform: translateX(-50%);
  }

  .titular:nth-child(7) {
    left: 50%;
    top: 55%;
    transform: translateX(-50%);
  }

  .titular:nth-child(8) {
    left: 60%;
    top: 15%;
  }

  .titular:nth-child(9) {
    left: 60%;
    top: 70%;
  }

  .titular:nth-child(10) {
    left: 70%;
    top: 50%;
  }

  .titular:nth-child(11) {
    left: 80%;
    top: 30%;
  }
`
