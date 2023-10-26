const HEAD = (
  <div
    style={{
      width: "50px",
      height: "50px",
      borderRadius: "100%",
      border: "10px solid red",
      position: "absolute",
      top: "30px",
      right: "8px",
    }}
  />
)

const BODY = (
  <div
    style={{
      width: "10px",
      height: "60px",
      background: "red",
      position: "absolute",
      top: "80px",
      right: "25px",
    }}
  />
)

const RIGHT_ARM = (
  <div
    style={{
      width: "60px",
      height: "10px",
      background: "red",
      position: "absolute",
      top: "120px",
      right: "-30px",
      rotate: "-30deg",
      transformOrigin: "left bottom",
    }}
  />
)

const LEFT_ARM = (
  <div
    style={{
      width: "60px",
      height: "10px",
      background: "red",
      position: "absolute",
      top: "120px",
      right: "30px",
      rotate: "30deg",
      transformOrigin: "right bottom",
    }}
  />
)

const RIGHT_LEG = (
  <div
    style={{
      width: "60px",
      height: "10px",
      background: "red",
      position: "absolute",
      top: "130px",
      right: "-27px",
      rotate: "60deg",
      transformOrigin: "left bottom",
    }}
  />
)

const LEFT_LEG = (
  <div
    style={{
      width: "60px",
      height: "10px",
      background: "red",
      position: "absolute",
      top: "130px",
      right: "25px",
      rotate: "-60deg",
      transformOrigin: "right bottom",
    }}
  />
)

const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG]

type HangmanDrawingProps = {
  numberOfGuesses: number
}

export function HangmanDrawing({ numberOfGuesses }: HangmanDrawingProps) {
  return (
    <div style={{ position: "relative" }}>
      {BODY_PARTS.slice(0, numberOfGuesses)}
      <div
        style={{
          height: "30px",
          width: "10px",
          background: "black",
          position: "absolute",
          top: 0,
          right: 30,
        }}
      />
      <div
        style={{
          height: "10px",
          width: "100px",
          background: "black",
          marginLeft: "120px",
        }}
      />
      <div
        style={{
          height: "200px",
          width: "10px",
          background: "black",
          marginLeft: "120px",
        }}
      />
      <div style={{ height: "10px", width: "250px", background: "black" }} />
    </div>
  )
}