import { Component, Input } from '@angular/core';

@Component({
    selector: 'comment',
    template: `
	<div class="comment-wrap">
		<div class="comment-title">
			<p>{{username}}</p>
		</div>
		<hr/>
		<div class="comment-body">
			<p>{{text}}</p>
		</div>
	</div>
`
})
export class CommentComponent {
    @Input() username: string;
	@Input() text: string;
}