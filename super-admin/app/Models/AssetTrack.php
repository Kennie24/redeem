<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Support\Facades\Storage;

class AssetTrack extends Model
{
    protected $fillable = ['title', 'audio_path', 'position', 'sample_plays'];

    protected $appends = ['audio_url'];

    public function asset(): BelongsTo
    {
        return $this->belongsTo(Asset::class);
    }

    public function getAudioUrlAttribute(): string
    {
        return Storage::url($this->audio_path);
    }
}
