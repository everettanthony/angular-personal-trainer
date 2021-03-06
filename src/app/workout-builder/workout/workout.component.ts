import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WorkoutPlan, ExercisePlan } from '../../core/model';
import { WorkoutBuilderService } from '../builder-services/workout-builder.service';

@Component({
  selector: 'abe-workout',
  templateUrl: './workout.component.html',
  styles: []
})
export class WorkoutComponent implements OnInit {
  workout: WorkoutPlan;
  sub: any;

  constructor(
    public route: ActivatedRoute,
    public workoutBuilderService: WorkoutBuilderService
  ) { }

  durations = [
    { title: '15 seconds', value: 15 },
    { title: '30 seconds', value: 30 },
    { title: '45 seconds', value: 45 },
    { title: '1 minute', value: 60 },
    { title: '1 minute 15 seconds', value: 75 },
    { title: '1 minute 30 seconds', value: 90 },
    { title: '1 minute 45 seconds', value: 105 },
    { title: '2 minutes', value: 120 },
    { title: '2 minutes 15 seconds', value: 135 },
    { title: '2 minutes 30 seconds', value: 150 },
    { title: '2 minutes 45 seconds', value: 165 },
    { title: '3 minutes', value: 180 },
    { title: '3 minutes 15 seconds', value: 195 },
    { title: '3 minutes 30 seconds', value: 210 },
    { title: '3 minutes 45 seconds', value: 225 },
    { title: '4 minutes', value: 240 },
    { title: '4 minutes 15 seconds', value: 255 },
    { title: '4 minutes 30 seconds', value: 270 },
    { title: '4 minutes 45 seconds', value: 285 },
    { title: '5 minutes', value: 300 }
  ];

  ngOnInit() {
    this.sub = this.route.data
      .subscribe((data: { workout: WorkoutPlan }) => {
        this.workout = data.workout;
      }
    );
  }

  addExercise(exercisePlan: ExercisePlan) {
    this.workoutBuilderService.addExercise(exercisePlan);
  }

  moveExerciseTo(exercisePlan: ExercisePlan, location: any) {
    this.workoutBuilderService.moveExerciseTo(exercisePlan, location);
  }

  removeExercise(exercisePlan: ExercisePlan) {
    this.workoutBuilderService.removeExercise(exercisePlan);
  }

  save(formWorkout: any) {
    console.log('Submitting:');
    console.log(this.workout);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
