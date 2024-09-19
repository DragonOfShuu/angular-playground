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

https://angular.dev/tutorials/learn-angular/12-enable-routing