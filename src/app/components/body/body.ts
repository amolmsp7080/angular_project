import { SignalDemo1 } from './../signal-demo1/signal-demo1';
import { SubjectDemo1 } from './../subject-demo1/subject-demo1';
import { EmployeeCrud } from './../employee-crud/employee-crud';
import { PipesDemo } from './../pipes-demo/pipes-demo';
import { DirectiveAssignments } from './../directive-assignments/directive-assignments';
import { DatabindingAssignments } from '../databinding-assignments/databinding-assignments';
import { DirectivesDemo } from '../directives-demo/directives-demo';
import { ProductList } from '../product-list/product-list';
import { DatabindingDemo } from './../databinding-demo/databinding-demo';
import { Component } from '@angular/core';
import { Parent } from '../parent/parent';
import { Demo1 } from '../demo1/demo1';
import { Demo2 } from '../demo2/demo2';
import { HttpDemo1 } from '../http-demo1/http-demo1';
import { UserList } from '../user-list/user-list';
import { Products } from '../products/products';
import { CommentList } from '../comment-list/comment-list';
import { EmployeeList } from '../employee-list/employee-list';
import { ObservableDemo1 } from '../observable-demo1/observable-demo1';
import { ObservableDemo2 } from '../observable-demo2/observable-demo2';
import { ObservableDemo3 } from '../observable-demo3/observable-demo3';
import { CartList } from '../cart-list/cart-list';
import { SignalDemo2 } from '../signal-demo2/signal-demo2';
import { FormDemo1 } from '../form-demo1/form-demo1';
import { TemplateFormDemo1 } from '../template-form-demo1/template-form-demo1';
import { SignalFormDemo1 } from '../signal-form-demo1/signal-form-demo1';
import { ModelForm } from '../model-form/model-form';
import { DynamicForm } from '../dynamic-form/dynamic-form';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-body',
  imports: [
    RouterOutlet,
    // DatabindingDemo
    // DatabindingAssignments
    // DirectivesDemo
    // ProductList,
    // DirectiveAssignments
    // PipesDemo
    // Parent
    // EmployeeCrud
    // Demo1,
    // Demo2,
    // HttpDemo1
    // UserList,
    // Products,
    // CommentList
    // EmployeeList
    // ObservableDemo1
    // ObservableDemo2
    // ObservableDemo3
    // SubjectDemo1
    // CartList
    // SignalDemo1
    // SignalDemo2
    // FormDemo1
    // TemplateFormDemo1
     SignalFormDemo1
    // ModelForm
   // DynamicForm
  ],
  templateUrl: './body.html',
  styleUrl: './body.css',
})
export class Body {
  flag: boolean = true;
}
