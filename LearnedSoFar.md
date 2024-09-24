# Creating Components

Components require a ts class, a component declaration using `@component`, and ofc a template function/template url (which links to a `*.component.html`)

## Example:

```ts
import { Component } from "@angular/core";

@Component ({
    selector: 'app-propbinded',
    styleUrls: ['propbinded.component.sass'],
    templateUrl: 'propbinded.component.html',
    standalone: true,
})

export class PropBindedComponent {
    isEditable = true;

    onClick() {
        this.isEditable = !this.isEditable;
    }
}
```

# Flow Control: @if

`@if` allows you to return elements if the following condition is true.

You can also use `@else` to alternatively return other code.

# Looping: @for

`@for` allows you to run a for loop through an array of data. You also need to declare a part of that data that Angular can use to keep track of that element (similar to the react `key` prop).

```html
    <!-- `track`, meaning how we track the elment in the list (similar to react key) -->
    @for (os of operatingSystems; track os.id) {
      <div class="p-2 bg-orange-500 border-2 border-orange-400 text-white">
        {{os.name}}
      </div>
    }
```

# Property Binding

You can bind properties by first wrapping the property on the html element with square `[]` brackets. This will signify that the next string is actually going to reference a property on your component's class.

```html
<div [class]="attachedClasses" />
```
```ts
export class UselessComponent {
    attachedClasses = "womp-womp border-2"
}
```

# Event Binding

Event binding is the exact same as property binding, but instead of using square brackets, you use parenthesis `()` around the property name.

```html
<button (click)="wompWomp()" />
```
```ts
export class UselessComponent {
    wompWomp() {
        console.log("womp womp")
    }
}
```

# @Input (similar to React props)

@Input is for passing data to a lower component. This is similar to props in React.

@Input in use:
```ts
export class OsViewerComponent {
  @Input({ required: true }) osData: OSData = { id: '', name: '' };
}
```

```ts
@for (os of operatingSystems; track os.id) {
    <app-os-viewer [osData]='os' />
}
```

# @Output (similar to passing a function to a child for a child to run in React)

@Output is for passing data to a parent component. This is simliar to a parent passing a function to a child for the child to run the function in React.

## @Output in use
Child:
```tsx
// Template
<button (click)="increment()" class="button">
    Increment ({{count}})
</button>

// In class
count = 0;
@Output() countChanged = new EventEmitter<number>();

increment() {
this.count++;
this.countChanged.emit(this.count);
}
```
Parent:
```tsx
// Template
<p>
    Parent count: {{parentCount}}
</p>
<app-counter (countChanged)="consumeNewCount($event)" />

// In class
parentCount: number = 0;

consumeNewCount(count: number) {
    this.parentCount = count;
}
```

# @defer (similar to React Suspense)

`@defer` lets you load contained elements after they load, or only when they need to be loaded. Similar to React Suspense, but probably better.

## @defer in use
```tsx
// Inside of template
@defer (on viewport) { // Contained elements only start loading once the defer is in view
    <app-comment CommentText="Angular is such a cool framework actually. React is still amazing, but I love how object oriented angular is. It's pretty epic." />
} @placeholder { // Placeholder before we start loading
    <p>Scroll down a little further...</p>
} @loading (minimum 1s) { // Elements to show while we are loading (minimum 1s meaning the loading will show for at least one second)
    <p>Positive Comment loading...</p>
}
```

# Optimizing Images (Similar to NextJS Image)

You can use this by first adding `NgOptimizedImage` to your imports, then use `ngSrc` to link your image. Make sure to declare a width and heigh, so that the image can take on the correct height before it is fully loaded.

## NgOptimizedImage in Use

```tsx
    // Imports
    [NgOptimizedImage]
    // Template
    <img ngSrc="/puck-image.png" alt="Puck from the anime re:zero" width="512" height="512" />
```

# Enable Routing

Create an `app.routes.ts`, that exports a constant called `routes` of type `Routes`.

```ts
import {Routes} from '@angular/router';
export const routes: Routes = [];
```

Now, inside the `app.config.ts` add a provider in the `providers` array called `provideRouter`, and pass the `routes` variable as a parameter.

```ts
export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)],
};
```

Finally, you can use the `<router-outlet />` to define where to display the page being routed to.

# Define a Route

In `app.routes.ts`, you can have an array that stores all of your routes. Make sure to use the `Routes` type. This will include a `path` (which already assumes a slash at the beginning), a `component`, and a `title`.

```ts
export const routes: Routes = [
    {
        component: UserPageComponent,
        path: 'user'
    }
];
```

# RouterLink Directive

All you have to do to enable routing in Angular is to import the `RouterLink` directive in your component's imports.

Then, you use the anchor tag with the `routerLink` attribute in place of the href.


# Template Forms

First, import the `FormsModule`, then on any forms input element, you can use a two-way binding ("banana in a box" `[()]`) for the property `ngModel` to bind a property to the value.

## Template Forms in Use

```html
<input id="anime" type="text" [(ngModel)]="favoriteAnime"/>
```
```ts
export class TemplateFormComponent {
  favoriteAnime = '';
}
```

## Getting the Form Values

Double curly braces, like any other variable.

```html
<p>
    Favorite Anime Answer: {{ favoriteAnime }}
</p>
```

# Reactive Forms

First, import the `ReactiveFormsModule`. Then you need to create a `FormGroup` with `FormControl`s inside your component class:

```ts
favAnimeForm = new FormGroup({
  favoriteAnime: new FormControl(''),
  reasonFavAnime: new FormControl(''),
})
```

Then, you can use `formGroup` in your `form` element to link it, then use `formControlName` to link each name, like so:

```html
<form class="flex flex-col gap-2" [formGroup]="favAnimeForm" (ngSubmit)="handleSubmit()">
    <label>Favorite Anime
        <input formControlName="favoriteAnime" type="text">
    </label>
    <label class="flex flex-col">Why?
        <input type="text" formControlName="reasonFavAnime">
    </label>
</form>
```

To use the form properties, you grab the `value` property, then the name:

```ts
Favorite Anime: {{favAnimeForm.value.favoriteAnime}}
Reason: {{favAnimeForm.value.reasonFavAnime}}
```

To submit the form, you can link to the method `(ngSubmit)` at the top of the form:

```ts
(ngSubmit)="handleSubmit()"
```

# Form Validators

You can add form validators by creating an array after the default `FormControl` value, and filling it with properties off of `Validators`, like so:

```ts
favAnimeForm = new FormGroup({
  //                                 Right here
  favoriteAnime: new FormControl('', Validators.required),
  reasonFavAnime: new FormControl(''),
  email: new FormControl('', [Validators.required, Validators.email])
})
```

# Services

Services are objects that you can let multiple components access, and they store logic and data inside them. They use the singleton structure; one is created, and all components reference it.

## Creating a Service

Use the `Injectable` decorator to mark it as provided in root. The cool thing is if this service is not used anywhere in your code, it is `tree-shaken`, meaning it is not delivered to the client at all.

```ts
@Injectable({
  providedIn: 'root'
})
export class ActuallyGoodAnimeService {
  anime: AnimeList = ["RE:Zero", "Angel Beats"];

  getAnime() {
    return this.anime;
  }
}
```

## Injection-Based Dependency Injection (Injecting a service)

Simply use the `inject` method around the service class reference:

```ts
export class UserPageComponent {
  actuallyGoodAnimeService = inject(ActuallyGoodAnimeService);
}
```

All Angular has to actually do is grab the singleton reference that was created.

## Constructor-Based Dependency Injection (Being given a service)

Instead of using the `inject` method, you simply include the class in your constructor, like so:

```ts
constructor(private actuallyGoodAnimeService: ActuallyGoodAnimeService) {
  this.goodAnimes = actuallyGoodAnimeService.getAnime();
}
```

# Pipes

Pipes are pure functions that you use inside of templates to transform data. For example, making text in a component uppercase.

```ts
@Component({
    ...
    //         Using the pipe operator to transform
    //         the given binded data to uppercase.
    template: `{{ loudMessage | uppercase }}`,
    imports: [UpperCasePipe],
})
class AppComponent {
    loudMessage = 'we think you are doing great!'
}
```

You can also pass data to pipes by using colons; you can chain colons as well:

```ts
{{timeToShow | date: 'medium'}}
```

Finally, you can also create pipes, using the pipe class decorator:
```ts
@Pipe({
  name: 'star',
  standalone: true
})
export class StarPipe implements PipeTransform {
  transform(value: string, ...args: string[]): string {
    return `🌟 ${value} 🌟`;
  }
}
```

# Conclusion

And there you have it, the basics of Angular! Now it's time to get out there and write some awesome applications!

https://angular.dev/tutorials/learn-angular/22-pipes
