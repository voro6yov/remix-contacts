export class Contact {
    id;
    first;
    last;
    avatar;
    twitter;
    notes;
    favorite;
    createdAt;
    constructor(id) {
        this.id = id;
        this.createdAt = new Date().toISOString();
    }
    update_info(first, last, avatar, twitter, notes) {
        this.first = first || this.first;
        this.last = last || this.last;
        this.avatar = avatar || this.avatar;
        this.twitter = twitter || this.twitter;
        this.notes = notes || this.notes;
    }
    markAsFavorite() {
        this.favorite = true;
    }
    markAsNotFavorite() {
        this.favorite = false;
    }
}
