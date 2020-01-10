export const data = {
    "count": 6,
    "next": "http://127.0.0.1:8000/api/v1/posts/?page=2",
    "previous": null,
    "results": [
        {
            "id": 7,
            "post_url": "http://127.0.0.1:8000/api/v1/posts/7/",
            "title": "Impossible",
            "body": "This post should not be created [sorry my bad... I was actually logged in]",
            "author": "iqbal",
            "created_at": "2020-01-07T04:42:42.746142Z",
            "time_since_created": 2,
            "updated_at": "2020-01-07T04:44:01.606994Z",
            "comments": []
        },
        {
            "id": 6,
            "post_url": "http://127.0.0.1:8000/api/v1/posts/6/",
            "title": "Alhamdulillah, finished post, comment, user",
            "body": "I have completed post, comment, user. Time to work on frontend",
            "author": "iqbal",
            "created_at": "2020-01-04T17:49:32.260080Z",
            "time_since_created": 4,
            "updated_at": "2020-01-04T17:49:32.260230Z",
            "comments": []
        },
        {
            "id": 5,
            "post_url": "http://127.0.0.1:8000/api/v1/posts/5/",
            "title": "new post: La Ilaha [illla Allah]",
            "body": "There is no God [but Allah]",
            "author": "mahfuza",
            "created_at": "2020-01-03T02:18:02.823554Z",
            "time_since_created": 6,
            "updated_at": "2020-01-03T11:28:18.244538Z",
            "comments": [
                {
                    "post": 5,
                    "id": 1,
                    "parent": null,
                    "body": "this a great post",
                    "author": "mahfuza",
                    "created_at": "2020-01-03T15:31:41.055715Z",
                    "replies": [
                        {
                            "id": 2,
                            "parent": 1,
                            "body": "Hi, Mahfuza, I liked your comment [updated] [updated_again]",
                            "author": "iqbal"
                        }
                    ]
                }
            ]
        },
        {
            "id": 3,
            "post_url": "http://127.0.0.1:8000/api/v1/posts/3/",
            "title": "3rd Post: Inna Lillah",
            "body": "Verily for Allah",
            "author": "mahfuza",
            "created_at": "2020-01-03T02:06:54.085198Z",
            "time_since_created": 6,
            "updated_at": "2020-01-03T02:06:54.085279Z",
            "comments": []
        }
    ]
}