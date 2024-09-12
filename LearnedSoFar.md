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