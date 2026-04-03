import { Component, inject, signal, WritableSignal } from '@angular/core';
import { CommentService } from '../../services/comment-service';
import { Comment } from '../../models/comment';

@Component({
  selector: 'app-comment-list',
  imports: [],
  templateUrl: './comment-list.html',
  styleUrl: './comment-list.css',
})
export class CommentList {
  commentService = inject(CommentService);
  commentArr: WritableSignal<Comment[]> = signal([]);

  ngOnInit() {
    this.commentService.getAllComments().subscribe((response: Comment[]) => {
      this.commentArr.set(response);
    });
  }
}
