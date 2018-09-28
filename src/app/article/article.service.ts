import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";

import { Article } from './article';

@Injectable()
export class ArticleService {
    //URL for CRUD operations
	articleUrl = "http://localhost:3000/articles";
	//Create constructor to get Http instance
	constructor(private http:Http) { 
	}
	//Fetch all articles
    getAllArticles(): Observable<Article[]> {
        return this.http.get(this.articleUrl)
		.pipe(map(this.extractData))

	}

	//Create article
    createArticle(article: Article):Observable<number> {
	    let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: cpHeaders });
        return this.http.post(this.articleUrl, article, options)
		.pipe(map(success => success.status))
    }
	//Fetch article by id
    getArticleById(articleId: string): Observable<Article> {
		let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
		let options = new RequestOptions({ headers: cpHeaders });
		console.log(this.articleUrl +"/"+ articleId);
		return this.http.get(this.articleUrl +"/"+ articleId)
		.pipe(map(this.extractData))
    }	
	//Update article
    updateArticle(article: Article):Observable<number> {
	    let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: cpHeaders });
        return this.http.put(this.articleUrl +"/"+ article.id, article, options)
		.pipe(map(success => success.status))
    }
    //Delete article	
    deleteArticleById(articleId: string): Observable<number> {
		let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
		let options = new RequestOptions({ headers: cpHeaders });
		return this.http.delete(this.articleUrl +"/"+ articleId)
		.pipe(map(success => success.status))
    }	
	private extractData(res: Response) {
	    let body = res.json();
        return body;
    }
}