import { Component } from "@angular/core";

@Component({
    selector: 'app-attribute',
    template: `<tr>
    <th [attr.colspan]="colVal"  style="border: 1px solid black;">
                        Friends List
     </th>
</tr>`
})

export class AttributeComponent{
    colVal: number = 2
}