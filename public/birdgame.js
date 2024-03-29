console.log("game_state");

let game_state = 'Start';
// Background scrolling speed
let move_speed = 3;

// Gravity constant value
let gravity = 0.5;

// Getting reference to the bird element
let bird = document.querySelector('.bird');

// Getting bird element properties
let bird_props = bird.getBoundingClientRect();
let background =
  document.querySelector('.background')
    .getBoundingClientRect();

// Getting reference to the score element
let score_val =
  document.querySelector('.score_val');
let message =
  document.querySelector('.message');
let score_title =
  document.querySelector('.score_title');

// Setting initial game state to start

// Add an eventlistener for key presses and mouse click
document.addEventListener('keydown', (e) => {
  // Start the game if the Enter key is pressed
  if (e.key == 'Enter' && game_state != 'Play') {
    document.querySelectorAll('.pipe_sprite').forEach((e) => {
      e.remove();
    });
    bird.style.top = '40vh';
    game_state = 'Play';
    message.innerHTML = '';
    score_title.innerHTML = 'Score : ';
    score_val.innerHTML = '0';
    document.querySelector('.score').style.display = 'block';
    document.querySelector('.message-wrapper').style.display = 'none';

    // Remove the red background
    document.querySelector('.background').style.backgroundColor = ''; 

    play();
  }
});

function play() {
  function move() {
    // Detect if game has ended
    if (game_state != 'Play') return;

    // Getting reference to all the pipe elements
    let pipe_sprite = document.querySelectorAll('.pipe_sprite');
    pipe_sprite.forEach((element) => {

      let pipe_sprite_props = element.getBoundingClientRect();
      bird_props = bird.getBoundingClientRect();

      // Delete the pipes if they have moved out
      // of the screen hence saving memory
      if (pipe_sprite_props.right <= 0) {
        element.remove();
      } else {
        const birdCenterX = bird_props.left + bird_props.width / 2;
        const birdCenterY = bird_props.top + bird_props.height / 2;
        const birdRadius = Math.min(bird_props.width, bird_props.height) / 4;
        if (
          birdCenterX + birdRadius > pipe_sprite_props.left &&
          birdCenterX - birdRadius < pipe_sprite_props.left + pipe_sprite_props.width &&
          birdCenterY + birdRadius > pipe_sprite_props.top &&
          birdCenterY - birdRadius < pipe_sprite_props.top + pipe_sprite_props.height
        ) {
          // Change game state and end the game
          // if collision occurs
          game_state = 'End';

message.innerHTML = 'Press Enter To Restart<br><span style="font-size: 14px;">Click the mouse to jump</span>';

          document.querySelector('.message-wrapper').style.display = 'block';
          document.querySelector(".background").style.backgroundColor = 'rgba(255, 0, 0, 0.8)';
          return;
        } else {
          // Increase the score if player
          // has successfully dodged the pipe
          if (
            pipe_sprite_props.right < bird_props.left &&
            pipe_sprite_props.right +
            move_speed >= bird_props.left &&
            element.increase_score == '1'
          ) {
            score_val.innerHTML = +score_val.innerHTML + 1;
          }
          element.style.left =
            pipe_sprite_props.left - move_speed + 'px';
        }
      }
    });

    requestAnimationFrame(move);
  }

  requestAnimationFrame(move);

  let bird_dy = 0;

  function apply_gravity() {
    if (game_state != 'Play') return;
    bird_dy = bird_dy + gravity;

    // Handle arrow key and mouse click events for jumping
    function jump() {
      bird_dy = -7.6;
    }

    document.addEventListener('keydown', (e) => {
      if (e.key == 'ArrowUp' || e.key == ' ') {
        jump();
      }
    });

    document.addEventListener('mousedown', jump);

    // Collision detection with bird and
    // window top and bottom
    if (bird_props.top <= 0 || bird_props.bottom >= background.bottom) {
      bird_props = bird.getBoundingClientRect();
      document.querySelector('.score').style.display = 'none';
      document.querySelector('.message-wrapper').style.display = 'block';
      game_state = 'End';
      message.innerHTML = 'Press Enter To Restart';
      return;
    }

    bird.style.top = bird_props.top + bird_dy + 'px';
    bird_props = bird.getBoundingClientRect();
    requestAnimationFrame(apply_gravity);
  }

  requestAnimationFrame(apply_gravity);

  let pipe_separation = 0;

  // Constant value for the gap between two pipes
  let pipe_gap = 35;

  function create_pipe() {
    if (game_state != 'Play') return;

    // Create another set of pipes
    // if the distance between two pipes has exceeded
    // a predefined value
    if (pipe_separation > 115) {
      pipe_separation = 0;

      // Calculate the random position of pipes on the y-axis
      let pipe_pos = Math.floor(Math.random() * 43) + 8;
      let pipe_sprite_inv = document.createElement('div');
      pipe_sprite_inv.className = 'pipe_sprite';
      pipe_sprite_inv.style.top = pipe_pos - 70 + 'vh';
      pipe_sprite_inv.style.left = '100vw';

      // Append the created pipe element in DOM
      document.querySelector('.hc-bird').appendChild(pipe_sprite_inv);
      let pipe_sprite = document.createElement('div');
      pipe_sprite.className = 'pipe_sprite';
      pipe_sprite.style.top = pipe_pos + pipe_gap + 'vh';
      pipe_sprite.style.left = '100vw';
      pipe_sprite.increase_score = '1';

      // Append the created pipe element in DOM
      document.querySelector('.hc-bird').appendChild(pipe_sprite);
    }
    pipe_separation++;
    requestAnimationFrame(create_pipe);
  }

  requestAnimationFrame(create_pipe);
}
