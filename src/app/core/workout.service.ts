import { Injectable } from '@angular/core';
import { Exercise, ExercisePlan, WorkoutPlan } from './model';
import { CoreModule } from './core.module';

@Injectable({
    providedIn: CoreModule
  })
  export class WorkoutService {
    workouts: Array<WorkoutPlan> = [];
    exercises: Array<Exercise> = [];
  
    constructor() {
        this.setupInitialExercises();
        this.setupInitialWorkouts();
    }
  
    getExercises() {
        return this.exercises;
    }
  
    getWorkouts() {
        return this.workouts;
    }

    getWorkout(name: string) {
        for (const workout of this.workouts) {
            if (workout.name === name) { return workout; }
        }
        return null;
    }
  
    setupInitialExercises() {
        this.exercises.push(
            new Exercise(
                'jumpingJacks',
                'Jumping Jacks',
                'A jumping jack or star jump, also called side-straddle hop is a physical jumping exercise.',
                'JumpingJacks.png',
                'jumpingjacks.wav',
                `<ul>
                  <li>Assume an erect position, with feet together and arms at your side.</li>
                  <li>Slightly bend your knees, and propel yourself a few inches into the air.</li>
                  <li>While in air, bring your legs out to the side about shoulder width or slightly wider.</li>
                  <li>As you are moving your legs outward, you should raise your arms up over your head; arms should be
                  slightly bent throughout the entire in-air movement.</li>
                  <li>Your feet should land shoulder width or wider as your hands meet above your head with arms slightly bent.</li>
                 </ul>`,
                ['dmYwZH_BNd0', 'BABOdJ-2Z6o', 'c4DAnQ6DtF8'])
        );

        this.exercises.push(
            new Exercise(
                'wallSit',
                'Wall Sit',
                'A wall sit, also known as a Roman Chair, is an exercise done to strengthen the quadriceps muscles.',
                'wallsit.png',
                'wallsit.wav',
                `<ul>
                   <li>Place your back against a wall with your feet shoulder width apart and a little ways out from the wall.</li>
                   <li>Then, keeping your back against the wall, lower your hips until your knees form right angles.</li>
                 </ul>`,
                ['y-wV4Venusw', 'MMV3v4ap4ro'])
        );

        this.exercises.push(
            new Exercise(
                'pushUp',
                'Push up',
                'A push-up is a common exercise performed in a prone position by raising and lowering the body using the arms',
                'Pushup.png',
                'pushups.wav',
                `<ul>
                  <li>Lie prone on the ground with hands placed as wide or slightly wider than shoulder width.</li>
                  <li>Keeping the body straight, lower body to the ground by bending arms at the elbows.</li>
                  <li>Raise body up off the ground by extending the arms.</li>
                </ul>`,
                ['Eh00_rniF8E', 'ZWdBqFLNljc', 'UwRLWMcOdwI', 'ynPwl6qyUNM', 'OicNTT2xzMI'])
        );

        this.exercises.push(
            new Exercise(
                'crunches',
                'Abdominal Crunches',
                'The basic crunch is a abdominal exercise in a strength-training program.',
                'crunches.png',
                'crunches.wav',
                `<ul>
                  <li>Lie on your back with your knees bent and feet flat on the floor, hip-width apart.</li>
                  <li>Place your hands behind your head so your thumbs are behind your ears.</li>
                  <li>Hold your elbows out to the sides but rounded slightly in.</li>
                  <li>Gently pull your abdominals inward.</li>
                  <li>Curl up and forward so that your head, neck, and shoulder blades lift off the floor.</li>
                  <li>Hold for a moment at the top of the movement and then lower slowly back down.</li>
                </ul>`,
                ['Xyd_fa5zoEU', 'MKmrqcoCZ-M'])
        );

        this.exercises.push(
            new Exercise(
                'stepUpOntoChair',
                'Step Up Onto Chair',
                'Step exercises are ideal for building muscle in your lower body.',
                'stepUpOntoChair.png',
                'stepup.wav',
                `<ul>
                  <li>Position your chair in front of you.</li>
                  <li>Stand with your feet about hip width apart, arms at your sides.</li>
                  <li>Step up onto the seat with one foot, pressing down while bringing your other foot up next to it.</li>
                  <li>Step back with the leading foot and bring the trailing foot down to finish one step-up.</li>
                </ul>`,
                ['aajhW7DD1EA'])
        );

        this.exercises.push(
            new Exercise(
                'squat',
                'Squat',
                'The squat is a compound, full body exercise that trains primarily the muscles of the thighs, hips, buttocks and quads.',
                'squat.png',
                'squats.wav',
                `<ul>
                  <li>Stand with your head facing forward and your chest held up and out.</li>
                  <li>Place your feet shoulder-width apart or little wider. Extend your hands straight out in front of you.</li>
                  <li>Sit back and down like you're sitting into a chair. Keep your head facing straight as your upper body bends forward a bit.</li>
                  <li>Rather than allowing your back to round, let your lower back arch slightly as you go down.</li>
                  <li>Lower down so your thighs are parallel to the floor, with your knees over your ankles. Press your weight back into your heels.</li>
                  <li>Keep your body tight, and push through your heels to bring yourself back to the starting position.</li>
                 </ul>`,
                ['QKKZ9AGYTi4', 'UXJrBgI2RxA'])
        );

        this.exercises.push(
            new Exercise(
                'tricepdips',
                'Tricep Dips On Chair',
                'A body weight exercise that targets triceps.',
                'tricepdips.png',
                'tricepdips.wav',
                `<ul>
                  <li>Sit up on a chair. Your legs should be slightly extended, with your feet flat on the floor.</li>
                  <li>Place your hands edges of the chair. Your palms should be down, fingertips pointing towards the floor.</li>
                  <li>Without moving your legs, bring your glutes forward off the chair.</li>
                  <li>Steadily lower yourself. When your elbows form 90 degrees angles, push yourself back up to starting position.</li>
                 </ul>`,
                ['tKjcgfu44sI', 'jox1rb5krQI'])
        );

        this.exercises.push(
            new Exercise(
                'plank',
                'Plank',
                `The plank (also called a front hold, hover, or abdominal bridge) is an isometric core strength exercise that
                involves maintaining a difficult position for extended periods of time.`,
                'Plank.png',
                'plank.wav',
                `<ul>
                  <li>Get into pushup position on the floor.</li>
                  <li>Bend your elbows 90 degrees and rest your weight on your forearms.</li>
                  <li>Your elbows should be directly beneath your shoulders, and your body should form a straight line from head to feet.</li>
                  <li>Hold this position.</li>
                </ul>`,
                ['pSHjTRCQxIw', 'TvxNkmjdhMM'])
        );

        this.exercises.push(
            new Exercise(
                'highKnees',
                'High Knees',
                'A form exercise that develops strength and endurance of the hip flexors and quads and stretches the hip extensors.',
                'highknees.png',
                'highknees.wav',
                `<ul>
                  <li>Start standing with feet hip-width apart.</li>
                  <li>Do inplace jog with your knees lifting as much as possible towards your chest.</li>
                 </ul>`,
                ['OAJ_J3EZkdY', '8opcQdC-V-U'])
        );

        this.exercises.push(
            new Exercise(
                'lunges',
                'Lunges',
                `Lunges are a good exercise for strengthening, sculpting and building several muscles/muscle groups,
                including the quadriceps (or thighs), the gluteus maximus (or buttocks) as well as the hamstrings.`,
                'lunges.png',
                'lunge.wav',
                `<ul>
                  <li>Start standing with feet hip-width apart.</li>
                  <li>Do inplace jog with your knees lifting as much as possible towards your chest.</li>
                 </ul>`,
                ['Z2n58m2i4jg'])
        );

        this.exercises.push(
            new Exercise(
                'pushupNRotate',
                'Pushup And Rotate',
                'A variation of pushup that requires you to rotate.',
                'pushupNRotate.png',
                'pushupandrotate.wav',
                `<ul>
                  <li>Assume the classic pushup position, but as you come up, rotate your body so your right arm lifts up and extends overhead.</li>
                  <li>Return to the starting position, lower yourself, then push up and rotate till your left hand points toward the ceiling.</li>
                 </ul>`,
                ['qHQ_E-f5278'])
        );

        this.exercises.push(
            new Exercise(
                'sidePlank',
                'Side Plank',
                'A variation to Plank done using one hand only.',
                'sideplank.png',
                'sideplank.wav',
                `<ul>
                  <li>Lie on your side, in a straight line from head to feet, resting on your forearm.</li>
                  <li>Your elbow should be directly under your shoulder.</li>
                  <li>With your abdominals gently contracted, lift your hips off the floor, maintaining the line.</li>
                  <li>Keep your hips square and your neck in line with your spine. Hold the position.</li>
                 </ul>`,
                ['wqzrb67Dwf8', '_rdfjFSFKMY'])
        );
    }
  
    setupInitialWorkouts() {
        const exercises = this.getExercises();
        const workout = new WorkoutPlan('7MinWorkout', '7 Minute Workout', 10, []);
        for (const exercise of this.exercises) {
            workout.exercises.push(new ExercisePlan(exercise, 30));
        }
        this.workouts.push(workout);
    }
  }